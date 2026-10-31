# 💎 Kanchan Jewellers – Offline Android App

Offline Android version of the [Gold_price](https://github.com/vaibhav-shaw/Gold_price) jewelry price calculator. It needs no internet: the app has no INTERNET permission and runs everything on the phone.

## Install
Download `Kanchan-Jewellers.apk` from the [Releases](../../releases) page, open it on the phone, and allow "Install unknown apps" when asked. Needs Android 8.0 or newer.

## Calculation (same as the website)
- **Gold:** making charges = % of base cost (default 12%), **25% off** making charges
- **Silver:** making charges = ₹ per gram (default ₹25/g), **50% off** making charges
- **GST:** 3% on base cost + discounted making charges
- **Default rates (per gram, editable in the app):** 24K ₹14,200 · 22K ₹13,300 · 18K ₹11,450 · Silver ₹190

To change the default rates, edit `GOLD_RATES` and the input `value`s in `app/src/main/assets/index.html`, then rebuild.

## Build
Needs JDK 17 and the Android SDK (platform 35, build-tools 35).
```bash
node test_calc.js          # calculation check
./gradlew assembleRelease  # APK in app/build/outputs/apk/release/
```
Release signing reads `keystore.properties` (not committed):
```
storeFile=/path/to/kanchan-release.jks
storePassword=...
keyAlias=kanchan
keyPassword=...
```
Keep the keystore safe: an update must be signed with the same key, or Android won't install it over the old app.

## Structure
```
app/src/main/assets/index.html   # UI
app/src/main/assets/calc.js      # calculation (mirrors Gold_price/app.py)
app/src/main/java/.../MainActivity.java  # WebView that loads the local page
test_calc.js                     # node check for calc.js
```

**Developed by:** Vaibhav Shaw
