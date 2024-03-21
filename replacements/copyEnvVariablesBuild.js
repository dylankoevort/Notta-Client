import { writeFileSync, readFileSync, existsSync, mkdirSync } from "fs";
import { resolve } from "path";
import dotenv from "dotenv";

try {
  console.log("Generating envVariables.js file...");

  // Load .env file
  dotenv.config({ path: resolve(process.cwd(), ".env.production") });

  const outputObject = {};

  console.log("Extracting VITE variables...");

  // Iterate over process.env and extract VITE variables
  for (const key in process.env) {
    if (key.startsWith("VITE_")) {
      // Remove 'VITE_' prefix and convert to camelCase
      const camelCaseKey = key
        .replace(/^VITE_/, "")
        .toLowerCase()
        .replace(/_(\w)/g, (_, letter) => letter.toUpperCase());
      outputObject[camelCaseKey] = process.env[key];
    }
  }

  if (Object.keys(outputObject).length === 0) {
    console.log("No VITE variables found.");
  }

  console.log("Defining output directory...");

  // Define output directory
  const outputDir = resolve(process.cwd(), "src/configs");

  // Ensure output directory exists
  if (!existsSync(outputDir)) {
    console.log("Output directory does not exist. Creating...");
    mkdirSync(outputDir, { recursive: true });
  }

  console.log("Output directory: ", outputDir);

  console.log("Writing to envVariables.js...");

  // Write to envVariables.js
  const outputFile = resolve(outputDir, "envVariables.js");
  const fileContent = `export default ${JSON.stringify(
    outputObject,
    null,
    2
  )};\n`;
  writeFileSync(outputFile, fileContent);

  console.log("SUCCESS! envVariables.js file has been generated successfully.");
} catch (err) {
  throw new Error("ERROR! Unable to generate envVariables.js file.: " + err);
}
