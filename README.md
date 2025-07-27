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

## License

MIT
