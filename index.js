// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [];

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
    const fileName = "README.md";
    const data = {
        title: "Password Generator", 
        description: "With our new password generator app, you'll have the ability to create randomized passwords by inputting your password specifications. Need a password including capitol letters? Special Characters? We've got you covered!",
        installation: "",
        feature: {
            description: "This is how the app appears to users. It is responsive, adapting to multiple screen sizes.",
            img: {
                altText: "Screenshot of the homepage, showing a box where the generated password will appear and a button below it.",
                fileName: "homepage.jpg"
            },
        }, 
        deployedSite: "https://github.com/ashlynn4567/Password-Generator", 
        suggestedFeature: "The user will have the option to customize which special characters they would like to include in the password generator.",
        email: "ashlynn4567@gmail.com", 
        githubUsername: "ashlynn4567",
        linkedInProfile: "https://www.linkedin.com/in/ashley-lynn-smith/"
    };
};

// Function call to initialize app
init();