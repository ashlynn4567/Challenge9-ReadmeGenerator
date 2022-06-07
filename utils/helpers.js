const inquirer = require("inquirer");

function insertTitleLines (title) {
    console.log("");
    console.log(`${title.toUpperCase()} SECTION:`);
    console.log("--------------------------");
    console.log("");
};

async function askQuestions (title = "", prompts = [], multiplePrompts = []) {
    return inquirerHandler(title, prompts)
        .then(async (response) => {
            // create empty answers object to be filled with user input 
            let answers = { ...response };

            // only enter if "enterMultiples" question is true AND multiplePrompts.length > 0
            if ((response.confirmFeature || response.confirmFuture || response.confirmInstallation) && multiplePrompts.length > 0) {
                let loop = true;
                // set list of answers from multiple prompts to empty
                let list = [];

                // add this confirmation question when applicable to sections that users can input multiple entries
                const allPrompts = multiplePrompts.concat([{
                    type: "confirm",
                    name: "addEntry",
                    message: "Do you want to add another entry to this section?",
                    default: "true"
                }]);

                // loop through prompts
                while (loop) {
                    // ask prompt question
                    let answers = await inquirerHandler(
                        `${title} ${list.length + 1}`,
                        allPrompts
                    )

                    // push answer from prompt to list results 
                    list.push(answers);

                    // if user says "yes" to multiple prompts, loop through question again
                    loop = answers.addEntry;
                };

                // once all answers have been gathered, return object
                answers = {
                    ...answers, 
                    [title]: list
                };
            };

            // return answers
            return answers;
        });
};

async function inquirerHandler (title="", prompts = []) {
    insertTitleLines(title);
    return await inquirer
        .prompt(prompts)
        .then((response) => response);
};

const licences = {
    "GNU AGPLv3": {
        link: "https://www.gnu.org/licenses/agpl-3.0",
        badge: "[![License: GNU AGPLv3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)"
    }, 
    "GNU GPLv3": {
        link: "https://www.gnu.org/licenses/gpl-3.0",
        badge: "[![License: GNU GPLv3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    }, 
    "GNU LGPLv3": {
        link: "https://www.gnu.org/licenses/lgpl-3.0",
        badge: "[![License: GNU LGPLv3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)"
    }, 
    "Mozilla": {
        link: "https://opensource.org/licenses/MPL-2.0",
        badge: "[![License: Mozilla](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
    }, 
    "MIT": {
        link: "https://opensource.org/licenses/MIT",
        badge: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    }, 
    "Apache": {
        link: "https://opensource.org/licenses/Apache-2.0",
        badge: "[![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    }, 
    "Boost": {
        link: "https://www.boost.org/LICENSE_1_0.txt",
        badge: "[![License: Boost](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
    }
};

// Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
    if (license) {
        return licences[license].badge;
    };
};
  
// Create a function that returns the license link
function renderLicenseLink(license) {
    return `[${license}](${licences[license].link})`;
};

// Create a function that loops through iterations within features section of README
function renderFeatures(choiceArr) {
    let response = "";
    if (choiceArr.length >= 1) {
        choiceArr.forEach(choice => {
            if (choice.confirmImage) {
                response = response.concat(
                    // TODO: potentially fix this weird formatting
                    `${choice.featureDescription}\n
<p align="center">
<img alt="${choice.featureImgAltText}" src="./images/${choice.featureImgFileName}"/>
</p>\n
`);
            } else {
                response = response.concat(`${choice.featureDescription}\n`);
            };
        });
    };
    return response;
};

function renderOrderedList(choiceArr) {
    let response = "";
    if (choiceArr.length >= 1) {
        choiceArr.forEach((choice, i) => {
            response = response.concat(`${i + 1}. ${choice}\n`);
        });
    };
    return response;
};

// Create a function that loops through iterations within technology section of README
function renderUnorderedList(choiceArr) {
    let response = "";
    if (choiceArr.length >= 1) {
        choiceArr.forEach(choice => {
            response = response.concat(`- ${choice}\n`);
        });
    };
    return response;
};

module.exports = { 
    insertTitleLines, 
    askQuestions, 
    inquirerHandler, 
    renderLicenseBadge,
    renderLicenseLink,
    renderFeatures,
    renderOrderedList,
    renderUnorderedList
};