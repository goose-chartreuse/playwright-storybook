import { test, expect } from "@playwright/test";

test.describe("Storybook Component Tests", () => {
  test("Button component should render correctly", async ({ page }) => {
    // Load a specific story using the URL pattern for Storybook stories
    await page.goto(
      "http://localhost:6006/iframe.html?globals=&args=&id=example-button--primary&viewMode=story"
    );

    // Assert that the button is rendered
    const button = await page.getByText("Button");
    await expect(button).toBeVisible();
  });
});
