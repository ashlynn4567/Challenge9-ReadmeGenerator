// Include packages needed for this application
const fs = require("fs");
const prompts = require("./utils/prompts");
const helpers = require("./utils/helpers");
const generateMarkdown = require("./utils/generateMarkdown");

// Create a function to initialize app
async function init() {
    // let userInput = {
    //     // overview section
    //     ...await helpers.askQuestions(
    //         "overview",
    //         prompts.overviewSection
    //     ),
    //     // deploy section
    //     ...await helpers.askQuestions(
    //         "deployment",
    //         prompts.deployedSection
    //     ),
    //     // feature section
    //     ...await helpers.askQuestions(
    //         "features",
    //         prompts.featureSection,
    //         prompts.featureQuestions
    //     ),
    //     // installation section
    //     ...await helpers.askQuestions(
    //         "installation",
    //         prompts.installationSection
    //     ),
    //     // technology section
    //     ...await helpers.askQuestions(
    //         "technology",
    //         prompts.technologySection
    //     ),
    //     // future section
    //     ...await helpers.askQuestions(
    //         "future development",
    //         prompts.futureSection,
    //         prompts.futureQuestions
    //     ),
    //     // credit section
    //     ...await helpers.askQuestions(
    //         "credits",
    //         prompts.creditSection
    //     ),
    // };
    // return userInput;
    let dummyData = {
        title: 'README Generator',
        description: 'This is my ninth challenge assignment for the University of Oregon Coding Bootcamp 2022. The challenge is to create an application using Node.js that gathers user input to generate a professional README for their GitHub Repository.',
        confirmDeployedSite: false,
        features: [
            { 
                featureDescription: 'With this tool, users can easily generate a README file to use in their repository just by answering a series of prompts in the command line.', 
                confirmImage: false, 
                addEntry: true 
            },
            { 
                featureDescription: 'blah', 
                confirmImage: false, 
                addEntry: true 
            },
            {
                featureDescription: 'blah',
                confirmImage: true,
                featureImgAltText: 'blah',
                featureImgFileName: 'blah',
                addEntry: false
            }
        ],
        confirmInstallation: true,
        installation: 'blah',
        technologiesChoice: [
            'JavaScript',
            'Node.js',
            'npm'
        ],
        'future development': [ 
            { 
                suggestedFeature: 'blah', 
                addEntry: true 
            },
            { 
                suggestedFeature: 'blah', 
                addEntry: true 
            }, 
            { 
                suggestedFeature: 'blah', 
                addEntry: false 
            }
        ],
        email: 'ashlynn4567@gmail.com',
        githubUsername: 'ashlynn4567',
        linkedInProfile: 'https://www.linkedin.com/in/ashley-lynn-smith/',
        license: 'MIT'
    }
    return dummyData;
};

// Create a function to write README file
const writeToFile = (fileContent) => {
    console.log(fileContent);
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
init()
    .then((userData) => {
        return generateMarkdown(userData);
    })
    .then((readmeMarkdown) => {
        return writeToFile(readmeMarkdown);
    })
    .catch((err) => {
        console.log(err)
    });