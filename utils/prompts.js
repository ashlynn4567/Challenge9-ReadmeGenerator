// an object containing all of the inquirer questions
module.exports = {
    // Create an array of questions for user input
    overviewSection: [
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
        }
    ],
    deployedSection: [
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
        }
    ],
    featureSection: [
        // features section confirm
        {
            type: "confirm",
            name: "confirmFeature",
            message: "Do you want to showcase a feature of your application in a 'Features' section?",
            default: true
        }
    ],
    featureQuestions: [
        // feature description
        {
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
            type: "confirm",
            name: "confirmImage", 
            message: "Will you be adding an image or gif displaying this feature?",
            default: true
        },
        // feature image alt text
        {
            when: ({ confirmImage }) => confirmImage,
            type: "input",
            name: "featureImgAltText", 
            message: "What should the alt text (if any) of your image say?"
        },
        // feature image file name
        {
            when: ({ confirmImage }) => confirmImage,
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
        }
    ],
    installationSection: [
        // installation section confirm
        {
            type: "confirm",
            name: "confirmInstallation",
            message: "Do you want to include instructions on how to install your application in an 'Installation' section?",
            default: true
        }
    ], 
    installationQuestions: [
        // installation instructions
        {
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
        }
    ],
    technologySection: [
        // technologies and languages used
        {
            // NOTE TODO: WANT TO MAKE THIS SO THAT USERS ARE ABLE TO SELECT MULTIPLE. THE FUNCTION IN GENERATEMARKDOWN.JS SHOULD ALSO RETURN MULTPLE ANSWERS
            type: "checkbox",
            name: "technologiesChoice",
            message: "Select the technologies or languages you used for this project as applicable. (Required)",
            choices: [
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
        }
    ],
    futureSection: [
        {
            type: "confirm",
            name: "confirmFuture",
            message: "Do you want to include a 'Future Development' section to showcase suggestions for future improvement of this application?",
            default: true
        }
    ],
    futureQuestions: [
        // future development section confirm
        {
            type: "input",
            name: "futureFeature", 
            message: "List a feature you would like to include in future development of this application. (Required)"
        },
    ],
    creditSection: [
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
            message: "Please enter your LinkedIn link for the contact information section."
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
    ]
};