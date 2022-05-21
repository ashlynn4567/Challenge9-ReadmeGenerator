// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const introQuestions = [
    // title
    {
        type: "input",
        name: "title", 
        message: "Please enter the title of your application. (Required)", 
        validate: (titleInput) => {
            if (titleInput) {
                return true;
            } else {
                console.log("You must enter a title to continue.");
                return false;
            };
        }
    },
    // description
    {
        type: "input",
        name: "description", 
        message: "Please enter a description of your application. (Required)", 
        validate: (descriptionInput) => {
            if (descriptionInput) {
                return true;
            } else {
                console.log("You must enter a description to continue.");
                return false;
            };
        }
    },
    // // deployed site
    // {
    //     deployedSite: ""
    // }, 
];

const featureQuestions = [
    // features section confirm
    {
        type: "confirm",
        name: "confirmFeature",
        message: "Do you want to showcase a feature of your application in a 'Features' section?",
        default: true
    },
    // feature description
    {
        when: ({ confirmFeature }) => confirmFeature,
        type: "input",
        name: "featureDescription", 
        message: "Please enter the description of this feature. (Required)", 
        validate: (featureDescription) => {
            if (featureDescription) {
                return true;
            } else {
                console.log("You must enter a feature description to continue.");
                return false;
            };
        }
    },
    // confirm image
    {
        when: ({ confirmFeature }) => confirmFeature,
        type: "confirm",
        name: "confirmImage", 
        message: "Will you be adding an image or gif displaying this feature?",
        default: true
    },
    // feature image alt text
    {
        when: (({ confirmFeature }) => confirmFeature) && (({ confirmImage }) => confirmImage),
        type: "input",
        name: "featureImgAltText", 
        message: "What should the alt text (if any) of your image say?"
    },
    // feature image file name
    {
        when: (({ confirmFeature }) => confirmFeature) && (({ confirmImage }) => confirmImage),
        type: "input",
        name: "featureImgFileName", 
        message: "What is the name of your image file (Required)?", 
        validate: (imgFileName) => {
            if (imgFileName) {
                return true;
            } else {
                console.log("You must enter the name of your image to continue.");
                return false;
            };
        }
    }, 
    // features section confirm
    {
        when: ({ confirmFeature }) => confirmFeature,
        type: "confirm",
        name: "confirmAdditionalFeature",
        message: "Do you want add another feature to this section?",
        default: true
    }
];

const usageQuestions = [
    // installation section confirm
    {
        type: "confirm",
        name: "confirmInstallation",
        message: "Do you want to include instructions on how to install your application in an 'Installation' section?",
        default: true
    },
    // installation instructions
    {
        when: ({ confirmInstallation }) => confirmInstallation,
        type: "input",
        name: "installation", 
        message: "What are the steps required to install your project? (Required)",
        validate: (installation) => {
            if (installation) {
                return true;
            } else {
                console.log("You must enter installation instructions to continue.");
                return false;
            };
        }
    },
    // // technologies and languages used
    // {
    //     technologiesChoice: ""
    // }
];

const futureDevelopmentQuestions = [
    // future development section confirm
    {
        type: "confirm",
        name: "confirmFutureDevelopment",
        message: "Do you want to include a 'Future Development' section to showcase suggestions for future improvement of this application?",
        default: true
    },
    {
        when: ({ confirmFutureDevelopment }) => confirmFutureDevelopment,
        type: "input",
        name: "suggestedFeature", 
        message: "List a feature you would like to include in future development of this application. (Required)"
    },
    // features section confirm
    {
        when: ({ confirmFutureDevelopment }) => confirmFutureDevelopment,
        type: "confirm",
        name: "confirmAdditionalSuggestion",
        message: "Do you want add another future development suggestion to this section?",
        default: true
    }
];

const creditsQuestions = [
    // // email
    // {
    //     email: ""
    // }, 
    // // github 
    // {
    //     githubUsername: ""
    // }, 
    // // linkedIn
    // {
    //     linkedInProfile: ""
    // },
    // // licensing 
    // {
    //     license: ""
    // }
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
        .prompt(introQuestions)
        .then((promptAnswers) => {
            return promptAnswers;
        });
};

// Function call to initialize app
init();