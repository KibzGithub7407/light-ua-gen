# LightUAgen – Enhanced Custom User Agent Generator for Lightweight Browsers

**LightUAgen** is a fast, configurable, and realistic User-Agent (UA) generator JavaScript module, tailored for lightweight Android browsers such as Via, Pure, Dolphin, and Lightning. It mimics modern Chrome/Firefox on Android/iOS, supports dynamic versioning, and can spoof desktop UAs for advanced use cases.

- **Live Demo:** [https://kibzgithub7407.github.io/light-ua-gen/](https://kibzgithub7407.github.io/light-ua-gen/)
- **Author:** [KibzGithub7407](https://github.com/KibzGithub7407)

---

## Features

- Mimics popular lightweight browsers (Via, Pure, Dolphin, Lightning)
- Realistic Android/iOS UA strings (Chrome/Firefox core)
- Dynamic versioning (random or custom)
- Optional Desktop-mode spoofing
- Fast, dependency-free, and ES Module compatible

---

# LightUAgen

Enhanced Custom User Agent Generator for Lightweight Browsers.

## Install

```bash
npm install light-ua-gen
```

## Usage

```js
import { generateUA } from "light-ua-gen";

console.log(generateUA({ browser: "Via", platform: "android", engine: "chrome" }));
```

[Live Demo](https://kibzgithub7407.github.io/light-ua-gen/)

## Usage

### 1. As a Module

```js
import { generateUA } from './lightUAgen.js';

const ua = generateUA({
  browser: 'Via', // or 'Pure', 'Dolphin', 'Lightning'
  platform: 'android', // or 'ios'
  engine: 'chrome', // or 'firefox'
  desktop: false // or true for desktop spoofing
});
console.log(ua);
```

### 2. In the Browser

See the [Live Demo](https://kibzgithub7407.github.io/light-ua-gen/) or use `index.html`.

---

## Development

- `src/` – ES6 module source (main logic in `lightUAgen.js`)
- `public/` – Demo page, quick copy UI, assets

---

## Using LightUAgen in Your Android Browsers

LightUAgen generates **realistic custom user-agent strings** for lightweight browsers like Via, Pure, Dolphin, and Lightning. Here’s how you can use it in those browsers:

---

### 1. **Generate Your Custom User-Agent**

- Visit the [Live Demo](https://kibzgithub7407.github.io/light-ua-gen/) on your Android browser.
- Configure your desired options (browser, platform, engine, desktop mode).
- Click **Copy UA** to get your custom user-agent string.

---

### 2. **Set the User-Agent in Your Browser**

#### **Via Browser**
1. Open Via.
2. Go to **Settings** → **Advanced** → **User Agent**.
3. Paste your copied UA string.

#### **Pure Browser**
1. Open Pure.
2. Tap the menu (three dots) → **Settings** → **Advanced** → **User Agent**.
3. Paste your copied UA.

#### **Dolphin Browser**
1. Open Dolphin.
2. Go to **Settings** → **Customize** → **User Agent**.
3. Paste your UA and confirm.

#### **Lightning Browser**
1. Open Lightning.
2. Go to **Settings** → **Advanced** → **Set User Agent**.
3. Paste your new UA.

---

### 3. **Test Your New User-Agent**

- Visit [https://www.whatismybrowser.com/](https://www.whatismybrowser.com/) or [https://www.whatsmyua.info/](https://www.whatsmyua.info/) to confirm your browser is using the new custom UA.

---

### 4. **(Optional) Automate or Script UA Change**

If your browser supports JavaScript injection or custom scripts, you can:
- Use the `light-ua-gen` npm package in your own tools.
- Or, generate UAs in your automation scripts and set them via browser options or intents (for advanced users).

---

**Tip:**  
Switching user agents can help with compatibility or privacy, but some sites may behave differently. Always keep a backup of your default UA.

---

## License

MIT
