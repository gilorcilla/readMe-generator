const inquirer = require("inquirer")
const fs = require("fs")
const generateMarkDown = require("./utils/generateMarkdown");
const util = require("util");

const writeFileAsynch = util.promisify(fs.writeFile);


// array of questions for user
const questions = [
    "What is the title of your project?",
    "What is your project description"?,
    

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
