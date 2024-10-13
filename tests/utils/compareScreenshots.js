// Function to compare screenshots, handle results, and attach diff to report if necessary
import fs from "fs";
import { compareImages } from "./compareImages";
// Function to compare screenshots, handle results, and attach diff to report if necessary
export async function compareScreenshots(
  baselinePath,
  screenshotPath,
  diffPath
) {
  const baselineExists = fs.existsSync(baselinePath);

  if (!baselineExists) {
    // Save the new screenshot as the baseline if it doesn't exist
    console.log(
      "Baseline image does not exist. Saving new screenshot as baseline."
    );
    fs.copyFileSync(screenshotPath, baselinePath);
    return true; // Treat this as a "pass"
  } else {
    // Compare the new screenshot with the baseline
    const imagesMatch = await compareImages(
      baselinePath,
      screenshotPath,
      diffPath
    );

    // If the images match, remove the new screenshot and the diff image
    if (imagesMatch) {
      fs.unlinkSync(screenshotPath); // Delete the new screenshot

      // Check if the diff image exists before trying to delete
      if (fs.existsSync(diffPath)) {
        fs.unlinkSync(diffPath); // Delete the diff image if it exists
      }
    } else {
      // Attach the diff image to the report when images do not match
      await test.info().attach("diff-image", {
        path: diffPath,
        contentType: "image/png",
      });
    }

    return imagesMatch;
  }
}
