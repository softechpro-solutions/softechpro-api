#!/usr/bin/env python3
"""Softechpro Solutions B2B REST API — Minimal Python 3 Integration Sample.
Official API Portal & Keys: https://www.softechpro-solutions.com/developers
"""
import os
import json
import urllib.request

API_BASE = "https://www.softechpro-solutions.com"
API_KEY = os.environ.get("SOFTECHPRO_API_KEY", "sp_live_your_api_key_here")


def fetch_public_coverage() -> dict:
    """Fetch live supported ECU brands and model counts."""
    req = urllib.request.Request(
        f"{API_BASE}/api/coverage-public",
        headers={"User-Agent": "Softechpro-Python-Sample/2.0.4"},
    )
    with urllib.request.urlopen(req, timeout=15) as resp:
        return json.loads(resp.read().decode("utf-8"))


if __name__ == "__main__":
    cov = fetch_public_coverage()
    print(f"Softechpro Live Cars Coverage: {cov.get('ecu_count')} ECUs across {cov.get('brand_count')} brands")
