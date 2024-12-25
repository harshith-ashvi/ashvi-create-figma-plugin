#!/usr/bin/env node

import { input, select } from "@inquirer/prompts";

const projectName = await input({
  message: "Project name: ",
  default: "my-figma-plugin",
  required: true,
});

const framework = await select({
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

const editorType = await select({
  message: "Select a editor type",
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

console.log("Hello Figma", projectName, framework, editorType);
