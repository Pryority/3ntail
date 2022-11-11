#!/usr/bin/env node

const { execSync } = require("child_process");

const runCommand = (command) => {
  try {
    execSync(`${command}`, {stdio: "inherit"});
  } catch (e) {
    console.error(`Failed to execute ${command}`);
    return false;
  }
  return true;
};

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/pryority/3ntail ${repoName}`;
const installDepsCommand = `cd ${repoName} && yarn install`;

console.log(`🧬 Cloning the repository with name ${repoName}`);
const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) process.exit(-1);

console.log(`💾 Installing dependencies for ${repoName}, your 3ntail scaffold app`);
const installedDeps = runCommand(installDepsCommand);
if (!installedDeps) process.exit(-1);

console.log("🎉 Congratulations! You are ready to use:  3ntail 3️⃣🪶 \n\n");
console.log("📄 Copy and paste the following command to start using your new 3ntail scaffold app ↙️");
console.log(`cd ${repoName} && yarn dev && code .`);