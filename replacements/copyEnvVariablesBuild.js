import { writeFileSync, readFileSync, existsSync, mkdirSync } from "fs";
import { resolve } from "path";
import dotenv from "dotenv";
import { fileURLToPath } from "url";

try {
  console.log("Generating envVariables.js file...");

  // Get current file directory
  const __dirname = fileURLToPath(import.meta.url);
  const rootDirectory = resolve(__dirname, "../../");

  // Load .env file
  const envPath = resolve(rootDirectory, ".env.production");
  console.log("EnvPath: ", envPath);

  let envConfig;
  try {
    const envFileContent = readFileSync(envPath, "utf-8");
    envConfig = dotenv.parse(envFileContent);
  } catch (error) {
    console.error("Error reading .env.production file:", error);
  }

  // Define output object
  const outputObject = {};

  console.log("Extracting VITE variables...");

  // Iterate over envConfig and extract VITE variables
  for (const key in envConfig) {
    if (key.startsWith("VITE_")) {
      // Remove 'VITE_' prefix and convert to camelCase
      const camelCaseKey = key
        .replace(/^VITE_/, "")
        .toLowerCase()
        .replace(/_(\w)/g, (_, letter) => letter.toUpperCase());
      outputObject[camelCaseKey] = envConfig[key];
    }
  }

  if (Object.keys(outputObject).length === 0) {
    console.log("No VITE variables found.");
  }

  console.log("Defining output directory...");

  // Define output directory
  const outputDir = resolve(rootDirectory, "src/configs");

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
