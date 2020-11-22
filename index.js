// External packages
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const { type } = require("os");

// Internal modules
const generateMarkDown = require("./utils/generateMarkdown.js");
// const api = require("./utils/")

const writeFileAsynch = util.promisify(fs.writeFile);

// array of questions for user
const questions = [
  "What is the title of your project?",
  "What is your project description?",
  "What are your installation requirements?",
  "How do you use this application?",
  "What license would you like to use?  Please select one.",
  "Are you open to contributions?",
  "What command will run your test?",
  "Enter your GitHub username.",
  "What is your email address>",
];

// function to write README file
//function writeToFile(fileName, data) {}
const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: questions[0],
    },
    {
      type: "input",
      name: "description",
      message: questions[1],
    },
    {
      type: "input",
      name: "installation",
      message: questions[2],
    },
    {
      type: "input",
      name: "usage",
      message: questions[3],
    },
    {
      type: "list",
      name: "license",
      message: questions[4],
      choices: ["BSD 3-Clause", "MIT", "Apache License", "BSD 2-Clause"],
    },
    {
      type: "input",
      name: "contribution",
      message: questions[5],
    },
    {
      type: "input",
      name: "testInstructions",
      message: questions[6],
    },
    {
      type: "input",
      name: "gitHubUser",
      message: questions[7],
    },
    {
      type: "input",
      name: "email",
      message: questions[8],
    },
  ]);
};

// function to initialize program
async function init() {
  console.log("Hello There!");
  try {
    const answers = await promptUser();
    const readme = generateMarkDown(answers);
    await writeFileAsynch("READ.md", readme);
    console.log("Successfully Wrote README.md!");
  } catch (err) {
    console.log(err);
  }
}

// function call to initialize program
init();
