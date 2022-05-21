// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const { title } = require("process");

// TODO: Create an array of questions for user input
const questions = [
    // title
    {
        type: "input",
        name: "title", 
        message: "Please enter the title of your project.", 
        validate: (titleInput) => {
            if (titleInput) {
                return true;
            } else {
                console.log("You must enter a title to continue.");
                return false;
            };
        },
    },
    // description
    {
        description: ""
    },
    // installation instructions
    {
        installation: ""
    },
    // usage and features
    {
        feature: {
            description: "", 
            img: {
                altText: "",
                fileName: ""
            }, 
        }
    }, 
    // technologies and languages used
    {
        technologiesChoice: ""
    },
    // deployed site
    {
        deployedSite: ""
    }, 
    // future development
    {
        suggestedFeature: ""
    },
    // licensing 
    {
        license: ""
    },
    // email
    {
        email: ""
    }, 
    // github 
    {
        githubUsername: ""
    }, 
    // linkedIn
    {
        linkedInProfile: ""
    }
];

// TODO: Create a function to write README file
const writeToFile = (fileContent) => {
    return new Promise ((resolve, reject) => {
        fs.writeFile("dist/README.md", fileContent, err => {
            if (err) {
                reject(err);
                return;
            };

            resolve({
                ok: true, 
                message: "README complete! Check out dist/README.md to see the output!"
            });
        }); 
    });
};

// TODO: Create a function to initialize app
function init() {
    return inquirer
        .prompt(questions)
        .then((promptAnswers) => {
            return promptAnswers;
        });
};

// Function call to initialize app
init();