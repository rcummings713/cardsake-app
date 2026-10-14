import { createRequire } from "node:module";
import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
const require = createRequire(
  process.env.STICKER_PACKAGE || new URL("../package.json", import.meta.url),
);
const { chromium } = require("@playwright/test");
const browser = await chromium.launch({ channel: "chrome", headless: true });
try {
  const page = await browser.newPage({
    viewport: { width: 256, height: 256 },
    deviceScaleFactor: 1,
  });
  for (const name of (await readdir(process.argv[2])).filter((n) =>
    n.endsWith(".svg"),
  )) {
    const svg = await readFile(join(process.argv[2], name), "utf8");
    await page.setContent(
      "<style>body{margin:0;background:#faf4ed}</style>" + svg,
    );
    await page.screenshot({
      path: join(process.argv[2], name.replace(".svg", ".png")),
    });
  }
} finally {
  await browser.close();
}
