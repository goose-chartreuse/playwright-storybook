import path from "path";
import { SCREENSHOT_DIR } from "../constants";

// Function to take a screenshot of a given element and return the path
export async function takeScreenshot(page, screenshotName) {
  const screenshotPath = path.join(SCREENSHOT_DIR, `${screenshotName}-new.png`);
  await page.screenshot({ path: screenshotPath });
  return screenshotPath;
}
