// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const prompts = require("./utils/helpers");
const helpers = require("./utils/helpers");
const generateMarkdown = require("./utils/generateMarkdown");

// Create a function to initialize app
async function init() {
    let userInput = {
        // overview section
        ...await helpers.askQuestions(
            "overview",
            prompts.overviewSection
        ),
        // deploy section
        ...await helpers.askQuestions(
            "deployment",
            prompts.deployedSection
        ),
        // feature section
        ...await helpers.askQuestions(
            "features",
            prompts.featureSection,
            prompts.featureQuestions
        ),
        // installation section
        ...await helpers.askQuestions(
            "installation",
            prompts.installationSection
        ),
        // technology section
        ...await helpers.askQuestions(
            "technology",
            prompts.technologySection
        ),
        // future section
        ...await helpers.askQuestions(
            "future development",
            prompts.futureSection,
            prompts.futureQuestions
        ),
        // credit section
        ...await helpers.askQuestions(
            "credits",
            prompts.creditSection
        ),
    };
    return userInput;
};

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

// Function call to initialize app
init().then(writeToFile(userInput));