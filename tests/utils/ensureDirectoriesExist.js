import fs from "fs";
import { SCREENSHOT_DIR, DIFF_DIR } from "../constants";
// Ensure the necessary directories exist
export function ensureDirectoriesExist() {
  if (!fs.existsSync(SCREENSHOT_DIR)) {
    fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
  }
  if (!fs.existsSync(DIFF_DIR)) {
    fs.mkdirSync(DIFF_DIR, { recursive: true });
  }
}
