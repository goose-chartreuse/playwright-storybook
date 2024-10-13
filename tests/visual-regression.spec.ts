import { test, expect } from "@playwright/test";
import path from "path";
import { DIFF_DIR, SCREENSHOT_DIR } from "./constants";
import { ensureDirectoriesExist } from "./utils/ensureDirectoriesExist";
import { takeScreenshot } from "./utils/takeScreenshot";
import { compareScreenshots } from "./utils/compareScreenshots";
import { createStorybookUrl } from "./utils/createStorybookUrl";

// Main test block
test.describe("Visual Regression Tests", () => {
  test.beforeAll(() => {
    ensureDirectoriesExist();
  });

  test("Compare Button component screenshot", async ({ page }) => {
    // Navigate to the story in Storybook

    const url = createStorybookUrl({
      id: "example-button--test-primary",
      globals: "",
      args: "",
      viewMode: "story",
    });

    // Navigate to the generated URL in Storybook
    await page.goto(url);

    await page.goto(
      "http://localhost:6006/iframe.html?globals=&args=&id=example-button--test-primary&viewMode=story"
    );

    // Wait for the element to be visible
    const button = page.locator(".storybook-button");
    await button.waitFor();

    // Take the screenshot
    const screenshotName = "button";
    const screenshotPath = await takeScreenshot(page, screenshotName);

    // Define paths for baseline and diff images
    const baselinePath = path.join(
      SCREENSHOT_DIR,
      `${screenshotName}-baseline.png`
    );
    const diffPath = path.join(DIFF_DIR, `${screenshotName}-diff.png`);

    // Compare the screenshots and check if they match
    const imagesMatch = await compareScreenshots(
      baselinePath,
      screenshotPath,
      diffPath
    );

    // Assert that the images match
    expect(imagesMatch, `Images do not match! See diff: ${diffPath}`).toBe(
      true
    );
  });
});
