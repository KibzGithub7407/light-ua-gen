// Enhanced Custom User Agent Generator for Lightweight Browsers
// Supports: Via, Pure, Dolphin, Lightning
// Platforms: Android, iOS; Engines: Chrome, Firefox; Optional Desktop Spoof

const BROWSER_PROFILES = {
  Via:  { chromeBrand: "Via",    base: "chrome" },
  Pure: { chromeBrand: "Pure",   base: "chrome" },
  Dolphin: { chromeBrand: "Dolphin", base: "chrome" },
  Lightning: { chromeBrand: "Lightning", base: "chrome" },
};

const ANDROID_CHROME_VERSIONS = [117, 120, 124];
const ANDROID_FIREFOX_VERSIONS = ["117.0", "123.0", "127.0"];
const IOS_CHROME_VERSIONS = ["117.0.5938.132", "124.0.6367.60"];
const IOS_FIREFOX_VERSIONS = ["117.0", "123.0"];

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomAndroidVersion() {
  const major = 7 + Math.floor(Math.random() * 7); // Android 7-13
  return major;
}
function randomDevice() {
  const devices = [
    "SM-G996B", // Samsung S21+
    "Pixel 6",
    "M2012K11AG", // Xiaomi
    "V2179A", // Vivo
    "CPH2409", // Oppo
    "RMX3085", // Realme
    "ONEPLUS A6010"
  ];
  return pickRandom(devices);
}
function randomiPhone() {
  const models = [
    "iPhone; CPU iPhone OS 17_0 like Mac OS X",
    "iPhone; CPU iPhone OS 16_5_1 like Mac OS X",
    "iPad; CPU OS 17_0 like Mac OS X"
  ];
  return pickRandom(models);
}

export function generateUA({
  browser = "Via",
  platform = "android", // or "ios"
  engine = "chrome", // or "firefox"
  desktop = false,
  version = null // User can override version
} = {}) {
  browser = browser[0].toUpperCase() + browser.slice(1);
  if (!BROWSER_PROFILES[browser]) browser = "Via";

  // Platform spoofing
  if (platform === "android") {
    const androidVer = randomAndroidVersion();
    const device = randomDevice();
    if (engine === "chrome") {
      const chromeMajor = version || pickRandom(ANDROID_CHROME_VERSIONS);
      if (desktop) {
        // Desktop Chrome UA
        return `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${chromeMajor}.0.0.0 Safari/537.36`;
      }
      return `Mozilla/5.0 (Linux; Android ${androidVer}; ${device}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${chromeMajor}.0.0.0 Mobile Safari/537.36 ${browser}/${chromeMajor}`;
    } else if (engine === "firefox") {
      const ffVer = version || pickRandom(ANDROID_FIREFOX_VERSIONS);
      if (desktop) {
        return `Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:${ffVer}) Gecko/20100101 Firefox/${ffVer}`;
      }
      return `Mozilla/5.0 (Android ${androidVer}; Mobile; rv:${ffVer}) Gecko/${ffVer} Firefox/${ffVer}`;
    }
  } else if (platform === "ios") {
    const iosModel = randomiPhone();
    if (engine === "chrome") {
      const chromeVer = version || pickRandom(IOS_CHROME_VERSIONS);
      if (desktop) {
        return `Mozilla/5.0 (Macintosh; Intel Mac OS X 14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${chromeVer} Safari/537.36`;
      }
      return `Mozilla/5.0 (${iosModel}) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/${chromeVer} Mobile/15E148 Safari/604.1 ${browser}/${chromeVer}`;
    } else if (engine === "firefox") {
      const ffVer = version || pickRandom(IOS_FIREFOX_VERSIONS);
      if (desktop) {
        return `Mozilla/5.0 (Macintosh; Intel Mac OS X 14_0; rv:${ffVer}) Gecko/20100101 Firefox/${ffVer}`;
      }
      return `Mozilla/5.0 (${iosModel}) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/${ffVer} Mobile/15E148 Safari/604.1`;
    }
  }
  // Fallback
  return "Mozilla/5.0 (compatible; LightUAgen/1.0)";
}
