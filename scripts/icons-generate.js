/**
 * Generate web app icons from a source SVG for Next.js.
 * Outputs to public/: favicon.ico, favicon-32x32.png, apple-touch-icon.png
 * Usage: node scripts/icons-generate.js [input-path]
 * Default input: public/favicon.svg
 */

const path = require("path");
const fs = require("fs");

const root = path.join(__dirname, "..");
const defaultInput = path.join(root, "public", "favicon.svg");
const inputPath = process.argv[2]
  ? path.isAbsolute(process.argv[2])
    ? process.argv[2]
    : path.join(root, process.argv[2])
  : defaultInput;

const publicDir = path.join(root, "public");

if (!fs.existsSync(inputPath)) {
  console.error(`Input not found: ${inputPath}`);
  process.exit(1);
}

async function main() {
  let sharp;
  let ico;
  try {
    sharp = require("sharp");
    ico = require("sharp-ico");
  } catch {
    console.error("Missing dependency. Run: npm install --save-dev sharp sharp-ico");
    process.exit(1);
  }

  console.log(`Generating icons from: ${inputPath}\n`);

  const sizes = [
    { size: 16, name: "favicon-16x16.png" },
    { size: 32, name: "favicon-32x32.png" },
    { size: 128, name: "apple-touch-icon.png" },
  ];

  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const density = 300;

  for (const { size, name } of sizes) {
    const outPath = path.join(publicDir, name);
    await sharp(inputPath, { density })
      .resize(size, size)
      .png()
      .toFile(outPath);
    console.log(`   ${name} (${size}×${size})`);
  }

  await ico.sharpsToIco([sharp(inputPath, { density })], path.join(publicDir, "favicon.ico"), {
    sizes: [16, 32],
  });
  console.log("   favicon.ico (16×16, 32×32)");

  console.log("\n✅ Web icons generated in public/");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
