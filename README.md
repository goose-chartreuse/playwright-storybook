# Playwright + Storybook

## Key features 🪴

- **Visual Regression Testing**: Integrate Playwright with Storybook to perform reliable visual regression tests. Ensure your components remain visually consistent across updates by capturing and comparing screenshots.

- **Automated Storybook Loading**: Automatically wait for Storybook to be fully loaded before performing tests, reducing flaky results and ensuring consistent test outcomes.

- **Reusable URL Utility**: Simplified URL generation for accessing specific Storybook stories through a custom utility function. This reduces hardcoding and makes tests more maintainable and modular.

- **Dynamic Screenshot Handling**: Capture screenshots for various components dynamically and compare them with baseline images using Pixelmatch, providing a clean mechanism for detecting visual changes.

- **Automated Cleanup**: Efficiently manage new screenshots and diffs by deleting them automatically if they match the baseline, keeping the workspace clean and organized.

- **Playwright Report Integration**: Attach diff images to Playwright test reports for easy inspection of visual mismatches, making it easier to identify and debug issues when tests fail.

## Getting Started 🚀

1. **Install dependencies**:

   ```bash
   npm install
   ```

   Ensure you have Playwright, Storybook, Pixelmatch, and PNGjs installed as development dependencies.

2. **Run Storybook**:

   ```bash
   npm run storybook
   ```

   This command will start Storybook on the default port (6006).

3. **Run Visual Regression Tests**:

   ```bash
   npm run test
   ```

   This command will execute Playwright tests that interact with Storybook components and compare visual snapshots.

4. **View Playwright Test Reports**:

   ```bash
   npx playwright show-report
   ```

   Open the HTML report to inspect any failing tests and see attached diff images for failed visual comparisons.

## Technologies Used 🛠️

| Technology    | Purpose                                  |
|---------------|------------------------------------------|
| Playwright    | Browser automation and testing framework |
| Storybook     | Isolated component development tool      |
| Pixelmatch    | Image comparison for visual regression   |
| PNGjs         | PNG image reading and manipulation       |
| Node.js       | JavaScript runtime environment           |

## Project Structure 🏗️

- **`/screenshots`**: Stores baseline and new screenshots.
- **`/screenshots/diffs`**: Stores diff images generated during visual regression tests.
- **`/tests`**: Contains Playwright tests that run against Storybook.
- **`/utils`**: Helper utilities for generating Storybook URLs and handling screenshots.

## How It Works ⚙️

- **Loading Stories**: The tests use a utility to generate Storybook URLs dynamically, enabling easy access to specific stories.
- **Taking Screenshots**: Screenshots of components are taken after ensuring Storybook is fully loaded and components are rendered.
- **Image Comparison**: Pixelmatch is used to compare the new screenshots against the baseline. If a mismatch is detected, a diff image is saved and attached to the Playwright report.

## Future Improvements 🌱

- **Integrate with CI/CD**: Automate visual regression tests in CI/CD pipelines to detect visual changes early in the development process.
- **Custom Thresholds**: Allow customizable Pixelmatch thresholds to control the sensitivity of visual comparisons.
- **Component-level Isolation**: Add functionality to test isolated components more thoroughly, including props and events.

Feel free to contribute and explore more ways to enhance the efficiency of visual regression testing with Playwright and Storybook!
