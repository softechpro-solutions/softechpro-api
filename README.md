# SOFTECHPRO API — Checksum Correction, CVN & DTC for developers

### 🔌 Automate ECU checksum correction, CVN and DTC handling in your own tuning platform or app

**[👉 Get an API key at softechpro-solutions.com](https://softechpro-solutions.com)**

The **SOFTECHPRO API** lets tuning platforms, shops and developers integrate our engine directly: send an ECU file, get back a **checksum & CVN-corrected** file — plus DTC scanning and DTC-off — over a simple REST API. The same brick-safe correctors that power SOFTECHPRO, available programmatically.

## ✨ What the API does

| Endpoint (REST) | Purpose |
|---|---|
| **Standalone Checksum + CVN** | Upload a modified `.bin`, receive it with the checksum & CVN recalculated — flash as-is. Bosch EDC16/EDC17/MED17/MEDC17/MED9/ME7/EDC7/MD1/MDG1/MG1, Delphi DCM/CRD2/CRD3, Siemens/Continental SID/Simos. |
| **DTC Scan** | Detect the diagnostic trouble codes present in an ECU file. |
| **DTC Off** | Return a file with the requested fault codes removed, brick-safe. |

- **Auth:** per-key, one registered domain per key (`X-API-Key` header)
- **Format:** REST / JSON + binary upload · responses usually in seconds
- **Coverage:** 740+ ECUs, 40+ brands, diesel and petrol

## 💳 Plans

| Plan | Price | Domains | Throughput |
|---|---|---|---|
| **LITE** | €69 / month · €650 / year | 1 registered domain | ~150 files/day · 60 req/min · DTC scan + off · Standalone Checksum + CVN |

Higher tiers available on request. Billing via Stripe (monthly or annual).

## 🚀 Quick start

```bash
# 1. Get your API key at softechpro-solutions.com (Developers / API)
# 2. Correct a checksum:
curl -X POST https://softechpro-solutions.com/api/checksum \
     -H "X-API-Key: YOUR_KEY" \
     -F "file=@modified.bin" \
     -o corrected.bin
```

> Endpoints, request/response schemas and your API key are provided in the **Developers / API** section after signup. One key = one registered domain (usage is tied to the domain, not the IP).

## Why SOFTECHPRO API
- Brick-safe, native checksum correctors — not a generic library
- Diesel **and** petrol, 740+ ECUs
- Simple REST, fast, per-domain licensing

🌐 **[softechpro-solutions.com](https://softechpro-solutions.com)** — get your key, full docs, pricing.

---
*SOFTECHPRO API — ECU checksum correction API, CVN correction API, DTC scan and DTC off REST API for tuning software, chiptuning platforms and workshops. Bosch, Siemens, Continental, Delphi, Marelli, Denso.*
