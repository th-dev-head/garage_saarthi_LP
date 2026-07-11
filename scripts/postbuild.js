import fs from 'fs';
import path from 'path';

const outPath = path.join(process.cwd(), 'out');
const distPath = path.join(process.cwd(), 'dist');

// Delete existing dist folder if it exists
if (fs.existsSync(distPath)) {
  fs.rmSync(distPath, { recursive: true, force: true });
}

// Rename out folder to dist
if (fs.existsSync(outPath)) {
  fs.renameSync(outPath, distPath);
  console.log("=== Successfully moved 'out' directory to 'dist'! ===");
} else {
  console.error("=== Error: 'out' folder was not found after Next.js build! ===");
  process.exit(1);
}
