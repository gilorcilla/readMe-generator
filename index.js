// External packages
// const inquirer = require("inquirer");
// const fs = require("fs");
// const util = require("util");
// const { type } = require("os");

// Internal modules
// const generateMarkDown = require("./utils/generateMarkdown.js");
// const api = require("./utils/api.js");

// const writeFileAsynch = util.promisify(fs.writeFile);

// array of questions for user
// const questions = [
//   "What is the title of your project?",
//   "What is your project description?",
//   "What are your installation requirements?",
//   "How do you use this application?",
//   "What license would you like to use?  Please select one.",
//   "Are you open to contributions?",
//   "What command will run your test?",
//   "Enter your GitHub username.",
//   "What is your email address>",
// ];

// function to write README file
//function writeToFile(fileName, data) {}
// const promptUser = () => {
//   return inquirer.prompt([
//     {
//       type: "input",
//       name: "title",
//       message: questions[0],
//     },
//     {
//       type: "input",
//       name: "description",
//       message: questions[1],
//     },
//     {
//       type: "input",
//       name: "installation",
//       message: questions[2],
//     },
//     {
//       type: "input",
//       name: "usage",
//       message: questions[3],
//     },
//     {
//       type: "list",
//       name: "license",
//       message: questions[4],
//       choices: ["BSD 3-Clause", "MIT", "Apache License", "BSD 2-Clause"],
//     },
//     {
//       type: "input",
//       name: "contribution",
//       message: questions[5],
//     },
//     {
//       type: "input",
//       name: "testInstructions",
//       message: questions[6],
//     },
//     {
//       type: "input",
//       name: "gitHubUser",
//       message: questions[7],
//     },
//     {
//       type: "input",
//       name: "email",
//       message: questions[8],
//     },
//   ]);
// };

// // function to initialize program
// async function init() {
//   console.log("Hello There!");
//   try {
//     const answers = await promptUser();
//     const readme = generateMarkDown(answers);
//     await writeFileAsynch("READ.md", readme);
//     console.log("Successfully Wrote README.md!");
//   } catch (err) {
//     console.log(err);
//   }
// }

// // function call to initialize program
// init();

// External packages
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

// Internal Modules
const api = require("./utils/api.js");
const generateMarkDown = require(".utils/generateMarkdown.js");

// Inquirer prompts for userResponses
const questions = [
  {
    type: "input",
    message: "What is your GitHub username? (No @ needed)",
    name: "username",
    default: "gil orcilla",
    validate: function (anserwer) {
      if (anserwer.length < 1) {
        return console.log("A valid GitHub username is required.");
      }
      return true;
    },
  },
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
    default: "Project Title",
    validate: function (answer) {
      if (answer.lengt < 1) {
        return console.log("A valid project title is required.");
      }
      return true;
    },
  },
  {
    type: "input",
    message: "Write a description of your project.",
    name: "description",
    default: "Project Description",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("A valid project description is required.");
      }
      return true;
    },
  },
  {
    type: "input",
    message:
      "If needed, describe the steps required to install your project for the instatlation section.",
    name: "installation",
  },
  {
    type: "input",
    message: "Provide possible use of your project in the usage section.",
    name: "usage",
  },
  {
    type: "input",
    message:
      "If possible, provide guidelines on how other developers can cantribute to your project.",
    name: "contributing",
  },
  {
    type: "input",
    message:
      "If possible, provide any tests written for your application and provide examples on how to run them.",
    name: "tests",
  },
  {
    type: "input",
    message: "Choose a license for your project.",
    choices: [
      "MIT License",
      "Apache License 2.0",
      "GNU AGPlv3",
      "GNU LGPLv3",
      "Mozilla Public license 2.0",
      "The Unlicense",
    ],
  },
];
