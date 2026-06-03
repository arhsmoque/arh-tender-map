#!/usr/bin/env -S uv run --script
# /// script
# requires-python = "==3.12.*"
# ///
"""
set-cf-deployment-secrets.py — Push Cloudflare credentials from arh-vault.json to GitHub Actions secrets.

UBAP Level 1 · risk: local_read + network_access (GitHub API via gh CLI)

Usage
-----
    uv run --script recipes/set-cf-deployment-secrets.py
    uv run --script recipes/set-cf-deployment-secrets.py --dry-run
    uv run --script recipes/set-cf-deployment-secrets.py --trigger
    uv run --script recipes/set-cf-deployment-secrets.py --vault path/to/arh-vault.json
    uv run --script recipes/set-cf-deployment-secrets.py --repo owner/other-repo

Vault keys read
---------------
    cloudflare_api_token_backup   → GitHub secret CLOUDFLARE_API_TOKEN
    cloudflare_account_id         → GitHub secret CLOUDFLARE_ACCOUNT_ID

Default vault path
------------------
    D:\\00_ARH\\.ARH-AGENT-ENV\\_env-mgmt\\env\\state\\keys_vault\\_api-keys\\arh-vault.json

Prerequisites
-------------
    gh CLI authenticated (gh auth status)
    arh-vault.json readable at the vault path

Output
------
    UBAP result envelope (JSON) to stdout. Non-zero exit on failure.
"""

import argparse
import json
import os
import subprocess
import sys
import urllib.request
from pathlib import Path


DEFAULT_VAULT = (
    r"D:\00_ARH\.ARH-AGENT-ENV\_env-mgmt\env\state\keys_vault\_api-keys\arh-vault.json"
)
DEFAULT_REPO = "arhsmoque/arh-tender-map"

VAULT_KEY_API_TOKEN  = "cloudflare_api_token_backup"
VAULT_KEY_ACCOUNT_ID = "cloudflare_account_id"


# ── Result envelope ────────────────────────────────────────────────────────────

def envelope(status: str, data: dict, message: str,
             evidence: list = None, errors: list = None, warnings: list = None) -> dict:
    return {
        "status":   status,
        "data":     data,
        "message":  message,
        "evidence": evidence  or [],
        "errors":   errors   or [],
        "warnings": warnings or [],
    }


# ── Vault reading ──────────────────────────────────────────────────────────────

def read_vault(vault_path: str) -> tuple[dict | None, str | None]:
    """Return (flat name→value dict, error_message). error_message is None on success."""
    p = Path(vault_path)
    if not p.exists():
        return None, f"vault file not found: {vault_path}"
    try:
        raw = json.loads(p.read_text("utf-8-sig"))
    except Exception as e:
        return None, f"could not parse vault JSON: {e}"
    # Support both flat dict and {keys: [{name, value, ...}]} array schema
    if isinstance(raw, dict) and "keys" in raw and isinstance(raw["keys"], list):
        data = {entry["name"]: entry.get("value", "") for entry in raw["keys"] if "name" in entry}
    else:
        data = raw
    return data, None


def fetch_cf_account_id(api_token: str) -> tuple[str | None, str | None]:
    """Return (account_id, error_message) by querying the Cloudflare API."""
    req = urllib.request.Request(
        "https://api.cloudflare.com/client/v4/accounts",
        headers={"Authorization": f"Bearer {api_token}", "Content-Type": "application/json"},
    )
    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            body = json.loads(resp.read())
    except Exception as e:
        return None, f"CF API request failed: {e}"
    accounts = body.get("result", [])
    if not accounts:
        return None, "CF API returned no accounts for this token"
    return accounts[0]["id"], None


# ── gh CLI helpers ─────────────────────────────────────────────────────────────

def gh_auth_check() -> tuple[bool, str]:
    """Return (ok, message). Verifies gh CLI is authenticated."""
    r = subprocess.run(
        ["gh", "auth", "status"],
        capture_output=True, text=True,
    )
    if r.returncode != 0:
        return False, r.stderr.strip() or "gh auth status failed"
    return True, "authenticated"


def gh_secret_set(name: str, value: str, repo: str, dry_run: bool) -> dict:
    if dry_run:
        return {"step": f"secret_set_{name}", "status": "dry_run",
                "command": f"gh secret set {name} --repo {repo} --body ***"}
    r = subprocess.run(
        ["gh", "secret", "set", name, "--repo", repo, "--body", value],
        capture_output=True, text=True,
    )
    if r.returncode != 0:
        return {"step": f"secret_set_{name}", "status": "failure",
                "stderr": r.stderr.strip()}
    return {"step": f"secret_set_{name}", "status": "success"}


def gh_workflow_run(repo: str, dry_run: bool) -> dict:
    if dry_run:
        return {"step": "workflow_trigger", "status": "dry_run",
                "command": f"gh workflow run deploy.yml --repo {repo}"}
    r = subprocess.run(
        ["gh", "workflow", "run", "deploy.yml", "--repo", repo],
        capture_output=True, text=True,
    )
    if r.returncode != 0:
        return {"step": "workflow_trigger", "status": "failure",
                "stderr": r.stderr.strip()}
    return {"step": "workflow_trigger", "status": "success"}


# ── Entry point ────────────────────────────────────────────────────────────────

def main() -> None:
    ap = argparse.ArgumentParser(
        description=__doc__,
        formatter_class=argparse.RawDescriptionHelpFormatter,
    )
    ap.add_argument(
        "--vault",
        default=os.environ.get("ARH_VAULT", DEFAULT_VAULT),
        metavar="PATH",
        help="Path to arh-vault.json (or set ARH_VAULT env). Default: %(default)s",
    )
    ap.add_argument(
        "--repo",
        default=DEFAULT_REPO,
        metavar="OWNER/REPO",
        help="GitHub repository to set secrets on. Default: %(default)s",
    )
    ap.add_argument(
        "--trigger",
        action="store_true",
        help="Trigger the deploy.yml workflow after setting secrets",
    )
    ap.add_argument(
        "--dry-run",
        action="store_true",
        help="Print what would happen; make no changes",
    )
    args = ap.parse_args()

    evidence: list[dict] = []
    data = {"repo": args.repo, "vault": args.vault, "dry_run": args.dry_run}

    # 1. Verify gh CLI auth
    if not args.dry_run:
        ok, msg = gh_auth_check()
        if not ok:
            print(json.dumps(envelope(
                "failure", data,
                "gh CLI not authenticated",
                errors=[msg, "Run: gh auth login"],
            ), indent=2))
            sys.exit(1)
        evidence.append({"step": "gh_auth_check", "status": "success", "detail": msg})
    else:
        evidence.append({"step": "gh_auth_check", "status": "dry_run"})

    # 2. Read vault
    vault_data, vault_err = read_vault(args.vault)
    if vault_err:
        print(json.dumps(envelope(
            "failure", data,
            "Could not read vault",
            errors=[vault_err],
        ), indent=2))
        sys.exit(1)
    evidence.append({"step": "read_vault", "status": "success", "path": args.vault})

    # 3. Extract credentials
    api_token  = vault_data.get(VAULT_KEY_API_TOKEN)
    account_id = vault_data.get(VAULT_KEY_ACCOUNT_ID)
    if not api_token:
        print(json.dumps(envelope(
            "failure", data,
            "Required vault key missing",
            errors=[f"vault key not found or empty: {VAULT_KEY_API_TOKEN!r}"],
            warnings=["Available keys: " + ", ".join(str(k) for k in vault_data)],
        ), indent=2))
        sys.exit(1)
    # account_id not in vault — fetch from CF API
    if not account_id:
        account_id, cf_err = fetch_cf_account_id(api_token)
        if cf_err:
            print(json.dumps(envelope(
                "failure", data,
                "cloudflare_account_id not in vault and CF API lookup failed",
                errors=[cf_err],
            ), indent=2))
            sys.exit(1)
        evidence.append({"step": "fetch_cf_account_id", "status": "success",
                         "account_id": account_id})
    evidence.append({"step": "extract_credentials", "status": "success",
                     "keys_found": [VAULT_KEY_API_TOKEN, VAULT_KEY_ACCOUNT_ID]})

    # 4. Set GitHub secrets
    for secret_name, secret_value in [
        ("CLOUDFLARE_API_TOKEN",  api_token),
        ("CLOUDFLARE_ACCOUNT_ID", account_id),
    ]:
        result = gh_secret_set(secret_name, secret_value, args.repo, args.dry_run)
        evidence.append(result)
        if result["status"] == "failure":
            print(json.dumps(envelope(
                "failure", data,
                f"Failed to set secret {secret_name}",
                evidence=evidence,
                errors=[result.get("stderr", "unknown error")],
            ), indent=2))
            sys.exit(1)

    # 5. Optionally trigger workflow
    if args.trigger:
        result = gh_workflow_run(args.repo, args.dry_run)
        evidence.append(result)
        if result["status"] == "failure":
            print(json.dumps(envelope(
                "failure", data,
                "Secrets set but workflow trigger failed",
                evidence=evidence,
                errors=[result.get("stderr", "unknown error")],
                warnings=["Secrets are set. Trigger manually: "
                          f"gh workflow run deploy.yml --repo {args.repo}"],
            ), indent=2))
            sys.exit(1)

    status  = "dry_run" if args.dry_run else "success"
    message = (
        "Dry run complete — no changes made" if args.dry_run
        else (
            f"Secrets set on {args.repo}"
            + (" + deploy workflow triggered" if args.trigger else
               ". Trigger deploy: gh workflow run deploy.yml "
               f"--repo {args.repo}")
        )
    )
    print(json.dumps(envelope(status, data, message, evidence=evidence), indent=2))


if __name__ == "__main__":
    main()
