import fs from "fs";
import { PNG } from "pngjs";
import pixelmatch from "pixelmatch";

/**
 * Compare two images using pixelmatch.
 * @param {string} image1Path - Path to the baseline image.
 * @param {string} image2Path - Path to the new screenshot.
 * @param {string} diffImagePath - Path to save the diff image.
 * @param {number} threshold - Threshold for comparison.
 * @returns {boolean} - True if images match, false otherwise.
 */
export async function compareImages(
  image1Path: string,
  image2Path: string,
  diffImagePath: string,
  threshold = 0.1
): Promise<boolean> {
  const img1 = PNG.sync.read(fs.readFileSync(image1Path));
  const img2 = PNG.sync.read(fs.readFileSync(image2Path));

  const { width, height } = img1;
  const diff = new PNG({ width, height });

  const numDiffPixels = pixelmatch(
    img1.data,
    img2.data,
    diff.data,
    width,
    height,
    { threshold }
  );

  if (numDiffPixels > 0) {
    fs.writeFileSync(diffImagePath, PNG.sync.write(diff));
  }

  return numDiffPixels === 0;
}
