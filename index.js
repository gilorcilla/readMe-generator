const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkDown = require("./utils/generateMarkdown");
const util = require("util");

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
function writeToFile(fileName, data) {}

// function to initialize program
function init() {}

// function call to initialize program
init();
