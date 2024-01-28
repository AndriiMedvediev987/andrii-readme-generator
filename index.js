// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const md = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is your project description?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'How your project should be installed?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'How your project should be used?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'How your project should be contributed?',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'How your project should be tested?',
        name: 'tests',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: [
          'No License used.',
          'MIT License',
          'Apache License 2.0',
          'Mozilla Public License 2.0',
          'GNU GPLv3',
        ],
    },
    {
        type: 'input',
        message: 'Enter your GitHub username:',
        name: 'githubusername',
    },
    {
        type: 'input',
        message: 'Enter your email address:',
        name: 'email',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!'));
}

// TODO: Create a function to initialize app
function init() {
    let prompt = inquirer.createPromptModule();
    prompt(questions)
        .then((response) => {
            let markdown = md.generateMarkdown(response);
            // let code_of_conduct = md.generateCodeofConduct(response);
            // console.log(markdown);
            // writeToFile('code_of_conduct.md', code_of_conduct);
            writeToFile('README.md', markdown);
        }
        );
}

// Function call to initialize app
init();
