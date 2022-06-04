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
    // console.log(userInput);
    // return userInput;

    // TODO: remove dummyData when done running mocks
    let dummyData = {
        title: 'title',
        description: 'description',
        confirmDeployedSite: false,
        // TODO: figure out why this is disappearing
        // confirmFeature: true,
        features: [
          {
            featureDescription: 'feature 1',
            confirmImage: true,
            featureImgAltText: 'blah',
            featureImgFileName: 'blah',
            addEntry: true
          },
          {
            featureDescription: 'feature 2',
            confirmImage: false,
            addEntry: false
          }
        ],
        confirmInstallation: true,
        installation: 'install',
        technologiesChoice: [ 'HTML', 'CSS', 'JavaScript' ],
        // TODO: figure out why this is disappearing
        // confirmFuture: true,
        'future development': [ { futureFeature: 'future dev 1 ', addEntry: false } ],
        email: 'blah',
        githubUsername: 'blah',
        linkedInProfile: 'blah',
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