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

console.log(`đ§Ŧ Cloning the repository with name ${repoName}`);
const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) process.exit(-1);

console.log(`đž Installing dependencies for ${repoName}, your 3ntail scaffold app`);
const installedDeps = runCommand(installDepsCommand);
if (!installedDeps) process.exit(-1);

console.log("đ Congratulations! You are ready to use:  3ntail 3ī¸âŖđĒļ \n\n");
console.log("đ Copy and paste the following command to start using your new 3ntail scaffold app âī¸");
console.log(`cd ${repoName} && yarn dev && code .`);