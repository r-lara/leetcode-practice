#!/usr/bin/env node
import * as fs from "fs";
import * as path from "path";
import inquirer from "inquirer";
import minimist from "minimist";
import { spawn } from "child_process";

// Path to problems folder
const problemsDir = path.join(__dirname, "problems");

// Get list of versions inside a problem folder
function getProblemVersions(problem: string): string[] {
  const problemPath = path.join(problemsDir, problem);
  try {
    const files = fs.readdirSync(problemPath);
    return files.filter((f) => f.endsWith(".ts"));
  } catch (err) {
    console.error("Error reading problem versions:", err);
    return [];
  }
}

// Function to execute a TS file
function runTsFile(filePath: string) {
  const tsNode = spawn("npx", ["ts-node", filePath], { stdio: "inherit" });

  tsNode.on("exit", (code) => {
    process.exit(code ?? 0);
  });
}

// CLI entry
async function main() {
  const args = minimist(process.argv.slice(2));
  console.log({ args });
  let {
    problem: selectedProblem,
    version: selectedVersion,
  }  = args ?? {};

  const problems = getProblems();
  if (problems.length === 0) {
    console.log("No problems found in src/problems.");
    process.exit(1);
  }

  // Choose a problem
  if (!selectedProblem) {
    const { problem } = await inquirer.prompt([
      {
        type: "list",
        name: "problem",
        message: "Select a problem:",
        choices: problems,
      },
    ]);
    selectedProblem = problem
  }

  // Choose a version; default v1
  const versions = getProblemVersions(selectedProblem);
  if (versions.length === 0) {
    console.log("No versions found for this problem.");
    process.exit(1);
  } else if (versions.length === 1 && versions[0] === 'v1.ts') {
    selectedVersion = versions[0]
  }

  if (!selectedVersion) {
    const { version } = await inquirer.prompt([
      {
        type: "list",
        name: "version",
        message: `Select a version for ${selectedProblem}:`,
        choices: versions,
      },
    ]);
    selectedVersion = version
  }

  const filePath = path.join(problemsDir, selectedProblem, selectedVersion);
  console.log(`Execute: ${selectedProblem}/${selectedVersion}`);
  runTsFile(filePath);
}

// Get list of problems
function getProblems(): string[] {
  try {
    const items = fs.readdirSync(problemsDir, { withFileTypes: true });
    return items.filter((item) => item.isDirectory()).map((d) => d.name);
  } catch (err) {
    console.error("Error reading problems folder: ", err);
    return [];
  }
}

main();
