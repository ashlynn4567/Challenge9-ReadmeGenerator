// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// Create an array of questions for user input
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
    // deployed site confirm
    {
        type: "confirm",
        name: "confirmDeployedSite",
        message: "Is your application deployed to a website?",
        default: true
    },
    // deployed site
    {
        when: ({ confirmDeployedSite }) => confirmDeployedSite,
        type: "input",
        name: "deployedSite", 
        message: "Please enter the link to your deployed application. (Required)", 
        validate: (deployedSite) => {
            if (deployedSite) {
                return true;
            } else {
                console.log("You must enter a description to continue.");
                return false;
            };
        }
    },
    // features section confirm
    {
        type: "confirm",
        name: "confirmFeature",
        message: "Do you want to showcase a feature of your application in a 'Features' section?",
        default: true
    }
];

const featureQuestions = [
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
    // technologies and languages used
    {
        // NOTE TODO: WANT TO MAKE THIS SO THAT USERS ARE ABLE TO SELECT MULTIPLE. THE FUNCTION IN GENERATEMARKDOWN.JS SHOULD ALSO RETURN MULTPLE ANSWERS
        type: "list",
        name: "technologiesChoice",
        message: "Select the tecnologies or languages you used for this project as applicable. (Required)",
        choices: [
            "None listed here", 
            "HTML",
            "CSS",
            "JavaScript", 
            "Node.js",
            "npm", 
            "Jest",
            "SQL",
            "MySQL",
            "Sequelize.js",
            "NoSQL",
            "MongoDB",
            "Mongoose.js",
            "Python",
            "Java",
            "C / C++",
            "C#",
            "R",
            "Ruby",
            "PHP",
            "Swift",
            "Rust", 
            "Go / Golang"
        ],
        validate: (technologiesChoice) => {
            if (technologiesChoice) {
                return true;
            } else {
                console.log("You must enter at least one tool or language choice to continue.");
                return false;
            };
        }
    },
    {
        type: "confirm",
        name: "confirmFutureDevelopment",
        message: "Do you want to include a 'Future Development' section to showcase suggestions for future improvement of this application?",
        default: true
    }
];

const futureDevelopmentQuestions = [
    // future development section confirm
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
    // email
    {
        type: "input",
        name: "email",
        message: "Please enter your email address for the contact information section."
    }, 
    // github 
    {
        type: "input",
        name: "githubUsername",
        message: "Please enter your GitHub Username for the contact information section."
    }, 
    // linkedIn
    {
        type: "input",
        name: "linkedInProfile",
        message: "Please enter your GitHub Username for the contact information section."
    },
    // licensing 
    {
        type: "list",
        name: "license",
        message: "Select the license for your project.",
        choices: [
            "GNU AGPLv3",
            "GNU GPLv3",
            "GNU LGPLv3",
            "Mozilla",
            "MIT",
            "Apache",
            "Boost"            
        ],
    }
];

// Create a function to write README file
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

// Create a function to initialize app
function init() {
    return inquirer
        .prompt(introQuestions)
        // // use logic from now on as we defined in our logic tree
        // .prompt(featureQuestions)
        // .prompt(usageQuestions)
        // .prompt(futureDevelopmentQuestions)
        // .prompt(creditsQuestions);
};


// Function call to initialize app
init();
    // .then((promptAnswers) => {
    //     console.log(promptAnswers);
    //     return generateMarkdown(promptAnswers);
    // })
    // .then((readmeMarkdown) => {
    //     return writeToFile(readmeMarkdown);
    // })
    // .then((writeToFileResponse) => {
    //     console.log(writeToFileResponse);
    // })
    // .catch((err) => {
    //     console.log(err);
    // });