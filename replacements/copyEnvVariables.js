import { writeFileSync, existsSync, mkdirSync, unlink, copyFile } from "fs";

const environment = process.env.npm_config_env; // 'dev' or 'live'
console.log(`Environment: ${environment}`);

deleteExistingEnvFiles();

if (!["dev", "live"].includes(environment)) {
  throw new Error(
    'Invalid environment. Please specify either "dev" or "live".'
  );
}

const envFilePath = "./environments/" + environment + "/envVariables.js";

try {
  import(envFilePath)
    .then((module) => {
      copyEnvVariables(environment, module.default);
      copyToConfig();
    })
    .catch((err) => {
      console.error(`Error importing environment variables: ${err}`);
      throw new Error(err);
    });
} catch (error) {
  console.error(`Error loading environment file: ${error}`);
  throw new Error(error);
}

function copyToConfig() {
  if (!existsSync("src/configs")) {
    mkdirSync("src/configs");
  }

  try {
    copyFile(
      "replacements/environments/" + environment + "/envVariables.js",
      "src/configs/envVariables.js",
      (err) => {
        if (err) {
          console.error(
            `Error copying environment variables to config: ${err}`
          );
          throw new Error(err);
        }
        console.log("Environment variables copied to config");
      }
    );
  } catch (err) {
    console.error(`Error copying environment variables to config: ${err}`);
    throw new Error(err);
  }
}

function copyEnvVariables(environment, envVariables) {
  const prefix = "VITE_";
  const envFileName =
    environment === "live" ? ".env.production" : ".env.development";

  const envContent = Object.entries(envVariables)
    .map(([key, value]) => `${prefix}${key.toUpperCase()}=${value}`)
    .join("\n");

  try {
    writeFileSync(envFileName, envContent);
    console.log(`Environment variables copied to ${envFileName}`);
  } catch (err) {
    console.error(`Error copying environment variables: ${err}`);
    throw new Error(err);
  }
}

function deleteExistingEnvFiles() {
  const envFiles = [".env.development", ".env.production"];
  console.log("Deleting existing environment files...");

  function deleteFile(envFile) {
    const filePath = `./${envFile}`;
    if (existsSync(filePath)) {
      unlink(filePath, (err) => {
        if (err) {
          console.error(`Error deleting file: ${envFile}`);
          throw new Error(err);
        } else {
          console.log(`${envFile} deleted successfully`);
        }
      });
    } else {
      console.log(`${envFile} does not exist`);
    }
  }

  for (const envFile of envFiles) {
    deleteFile(envFile);
  }
}
