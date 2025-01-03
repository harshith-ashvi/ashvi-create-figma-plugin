#!/usr/bin/env node

import { input, select } from "@inquirer/prompts";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

async function main() {
  const argv = yargs(hideBin(process.argv))
    .option("name", {
      alias: "n",
      type: "string",
      description: "Plugin name",
    })
    .option("framework", {
      alias: "f",
      type: "string",
      choices: ["vanilla", "react"],
      description: "Framework to use",
    })
    .option("editorType", {
      alias: "e",
      type: "string",
      choices: ["figma", "figjam", "both"],
      description: "Editor type(s)",
    })
    .help().argv;

  let name;
  if (!argv.name) {
    name = await input({
      message: "Plugin name: ",
      default: "my-figma-plugin",
      required: true,
    });
  }

  let framework;
  if (!argv.framework) {
    framework = await select({
      message: "Select a framework",
      required: true,
      default: "vanilla",
      choices: [
        {
          name: "vanilla",
          value: "vanilla",
        },
        {
          name: "react",
          value: "react",
        },
      ],
    });
  }

  let editorType;
  if (!argv.editorType) {
    editorType = await select({
      message: "Select a editor type(s)",
      required: true,
      default: "both",
      choices: [
        {
          name: "Figma",
          value: "figma",
        },
        {
          name: "Figjam",
          value: "figjam",
        },
        {
          name: "Both",
          value: "both",
        },
      ],
    });
  }

  const finalAnswers = {
    name: argv.name ?? name,
    framework: argv.framework ?? framework,
    editorType: argv.editorType ?? editorType,
  };

  console.log("Creating plugin with the following options:");
  console.log(`- Project Name: ${finalAnswers.name}`);
  console.log(`- Framework: ${finalAnswers.framework}`);
  console.log(`- Editor Type: ${finalAnswers.editorType}`);

  // Add scaffolding logic here
}

main().catch((error) => {
  console.error("Error creating plugin:", error);
  process.exit(1);
});
