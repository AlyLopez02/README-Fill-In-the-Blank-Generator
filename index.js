// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    "What is your full name?",
    "What is the title of your project?",
    "Please write a description of the project.",
    "Please input the installation instructions.",
    "Please explain the usage of your application.",
    "Who contributed in this project?",
    "Please input test instructions here.",
    "Please choose the license that your application is covered under from the following.",
    "What is your GitHub username?",
    "What is your email address?",
    "How should you be reached if someone has additional questions?"];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFile("project.md", md);
// }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: questions[0]
    },
    {
        type: "input",
        name: "title",
        message: questions[1]
    },
    {
        type: "input",
        name: "description",
        message: questions[2]
    },
    {
        type: "input",
        name: "installation",
        message: questions[3]
    },
    {
        type: "input",
        name: "usage",
        message: questions[4]
    },
    {
        type: "input",
        name: "contributers",
        message: questions[5]
    },
    {
        type: "input",
        name: "tests",
        message: questions[6]
    },
    {
        type: "list",
        name: "license",
        message: questions[7],
        // choices: ["", "", "", "", "", ""] // input choices
    },
    {
        type: "input",
        name: "username",
        message: questions[8]
    },
    {
        type: "input",
        name: "email",
        message: questions[9]
    },
    {
        type: "input",
        name: "reach",
        message: questions[10]
    }

])
.then(

)

}




// Function call to initialize app
init();
