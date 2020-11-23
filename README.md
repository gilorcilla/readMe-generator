# readMe-generator

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Description

Every good project deserves a quality README.md with information about the application. This app

is creating a README file by responding to the questions via Command Line Interface (CLI). After

providing the answers, it will automatically generate a README file based from the responses from

CLI.

## Table of Contents

-[Installation]

-[Usage]

-[Methodology]

-[License]

## Installation

To generate your own README, first run npm install in order to install the following npm package d

dependencies as specicied in the package.json:

- inquirer that will prompt you for your inputs from the command line

- axios to fetch your info from the GitHub API

The application itself can be invoked with node index.js.

## Usage

Instructions and examples for use:

When you run node index.js, the application uses the inquirer package to prompt you in the

command line with series of questions regarding your GitHub info and your project.

The Application then takes your responses and uses axios to fetch your GitHub profile from

the GitHub API, that includes your profile picture and email. From there, the application

will generate a markdown and a table of contents for the README file based from the respon-

ses to the inquirer prompts. The README should include badges for your GitHub repo.

Lastly, fs.writeFile is utilize to generate your project's README file. Check out the

ExampleREADME.md in this repo as an example.

![Demonstration]()

## Methodology

The application utilizes modularization by separating the GitHub API call and generation of

the markdown into separate modules: api.js and generateMarkdown.js, respectively, inside the utils folder.

The application also utilizes syntax and paradigms introduced in ES6 and beyond, that includes const, let, arrow functions,

template literals, and await/async to handle axios, inqurer, and fs.writeFile promises.

## License

MIT License

## Questions

![Developer Profile Picture](./My_Picture.pdf)

GitHub: @gilorcilla

Email: mathnasiumcos@gmail.com
