import fs from 'fs';
import path from 'path';

const outPath = path.join(process.cwd(), 'out');
const distPath = path.join(process.cwd(), 'dist');

// Ensure dist folder exists
if (!fs.existsSync(distPath)) {
  fs.mkdirSync(distPath, { recursive: true });
}

// Copy out folder to dist recursively (more robust against EPERM locks on Windows)
if (fs.existsSync(outPath)) {
  fs.cpSync(outPath, distPath, { recursive: true, force: true });
  fs.rmSync(outPath, { recursive: true, force: true });
  console.log("=== Successfully copied 'out' directory to 'dist'! ===");
} else {
  console.error("=== Error: 'out' folder was not found after Next.js build! ===");
  process.exit(1);
}
