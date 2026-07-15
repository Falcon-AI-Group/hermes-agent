# Corpus12 Desktop — white-label build

**Product:** Corpus12 by Falcon Global Services  
**Upstream pin:** Hermes Agent `v2026.7.7.2` (MIT, Nous Research)  
**Branch:** `brand/corpus12-desktop`

## What is rebranded
- Electron `productName` / `appId` / icons / DMG title
- In-app BrandMark + About legal line
- English UI chrome strings (product name)

## What is NOT renamed
- Runtime paths (`~/.hermes`), CLI binary name (`hermes`)
- Internal Python package names
- Deep protocol compatibility may still use Hermes agent APIs

## Legal
This distribution includes open-source Hermes Agent under the MIT License.
Copyright (c) Nous Research. See `LICENSE`.
Corpus12 branding © Falcon Global Services.

## Build
```bash
cd /Users/stonedrider/src/corpus12-agent
npm install
cd apps/desktop
npm run dist:mac:dmg   # or npm run pack for unpacked .app
```

Artifacts: `apps/desktop/release/Corpus12-1.0.0-mac-arm64.dmg` (arch varies)

## Build status (2026-07-14)

- **macOS arm64 DMG:** `dist/Corpus12-1.0.0-mac-arm64.dmg` (~127 MB)
- **Signed:** Apple Development (davidfu84@gmail.com) — not notarized
- **Smoke:** app launches; backend ready when Hermes root available
- **Install stamp:** upstream pin `9de9c25` / tag `v2026.7.7.2`
