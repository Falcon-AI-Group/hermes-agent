# Install Corpus12 Desktop (macOS arm64)

**Product:** Corpus12 by Falcon Global Services  
**Version:** 1.0.0  
**Upstream agent:** Hermes Agent v2026.7.7.2 (MIT, Nous Research)  
**Installer:** `dist/Corpus12-1.0.0-mac-arm64.dmg` (also copied to your Desktop)

## Install (client)

1. Open **`Corpus12-1.0.0-mac-arm64.dmg`**
2. Drag **Corpus12.app** → **Applications**
3. First open: if Gatekeeper warns (unsigned for distribution / Dev-signed only),
   right-click → **Open** → **Open**
4. On first launch the app bootstraps the Hermes agent runtime into `~/.hermes`
   (one-time download). Stay online.
5. Complete provider/model setup in the onboarding UI.

## What you should see

| Surface | Branding |
|---|---|
| Dock / menu bar name | **Corpus12** |
| App bundle id | `com.falconglobal.corpus12` |
| About | Corpus12 + legal line for Hermes Agent (MIT) / Nous Research |
| User data dir | `~/Library/Application Support/Corpus12` |
| Agent home (runtime) | `~/.hermes` (shared layout with stock Hermes CLI — intentional) |

## Rebuild from source

```bash
cd /Users/stonedrider/src/corpus12-agent
git checkout brand/corpus12-desktop
npm install
cd apps/desktop
npm run dist:mac:dmg
# → apps/desktop/release/Corpus12-1.0.0-mac-arm64.dmg
```

`branding/upstream-pin.json` keeps first-launch bootstrap on Hermes `v2026.7.7.2`.

## Notarization (for public client distribution)

Current build is signed with **Apple Development** identity (local).  
For public download without Gatekeeper friction, configure Developer ID + notarization:

- `CSC_LINK` / `CSC_KEY_PASSWORD`
- `APPLE_API_KEY` / `APPLE_API_KEY_ID` / `APPLE_API_ISSUER`

Then re-run `npm run dist:mac:dmg`.

## Windows / Linux

```bash
npm run dist:win    # NSIS + MSI
npm run dist:linux  # AppImage + deb + rpm
```

## Legal

Includes open-source Hermes Agent under the MIT License.  
Copyright (c) Nous Research. See `LICENSE`.  
Corpus12 branding © Falcon Global Services.
