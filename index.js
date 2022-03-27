// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What is your projects name? (Required)",
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter project title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaining the what, why and how of your project. (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter project description!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? Please provide a step by step description of how to get the development environment running.(Required)',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please enter Installation Instructions!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use. Please include screenshots. (Required)',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please enter how to use your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators, if any, with links to their gitHub profiles,if there are none please enter N/A. (Required)',
        validate: creditsInput => {
            if (creditsInput) {
                return true;
            } else {
                console.log('Please enter any collaborators that you had on your project, if there were none please enter N/A.');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project, this tells others what they can and cannot so with your project.',
        choices: ['MIT', 'Apache 2.0', 'GNU AGPLv3', 'Mozilla 2.0', 'Boost Software']
    },
    {
        type: 'confirm',
        name: 'contributions',
        message: 'Would you like to add your own custom contribution guidelines? If not, Contributor Covenant guidelines will be applied.',
        default: true
    },
    {
        type: 'input',
        name: 'custom guidelines',
        message: 'Enter your custom contribution guidelines here',
        when: ({ contributions }) => {
            if(contributions) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'testing',
        message: 'Write tests for your application, provide examples on how to run them here. (Required)',
        validate: testingInput => {
            if (testingInput) {
                return true;
            } else {
                console.log('Please enter testing instructions!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username. (required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your github username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address. (required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email address!');
                return false;
            }
        }
    },
];

// TODO: Create a function to write README file


function writeToFile(data) {
    fs.writeFile('./dist/README.md', data, err => {
        if (err) throw err;

        console.log('README complete. Look for README file to see result.');
    });
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
}

// Function call to initialize app
init()
.then(data => {
    return generatePage(data);
})
.then(pageREADME => {
    return writeToFile(pageREADME);
})

.catch(err => {
    console.log(err);
});
