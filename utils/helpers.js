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
            if (response.enterMultiples && multiplePrompts.length > 0) {
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

// Create a function that returns a license badge based on which license is passed in. If there is no license, return an empty string */
function renderLicenseBadge(license) {
    if (license) {
        return licences[license].badge;
    } else {
       return ""; 
    };
};
  
// Create a function that returns the license link. If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license) {
        return licences[license].link;
    } else {
       return "";
    };
};

/* 

    const licenses = {
        "GNU AGPLv3": {
            link: 'https://www.gnu.org/licenses/agpl-3.0',
            badge: '[![License: GNU AGPLv3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'
        },
        gnu_agpLv3: {

        }

        // ... repeat for all the licenses
    }

    licence["GNU APGLv3"].link
    license["GNU APGLv3"].badge

*/



// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license !== "") {
        return `
    ## Licensing 

    The application is covered under the following license: [${license}](${renderLicenseLink(license)})
        `;
    } else {
        return "";
    };
};
  
// Create a function that returns the license link
// If there is no license, return an empty string
function renderTechologyLink(technologiesChoice) {
    switch (technologiesChoice) {
        case "HTML":
        return `https://developer.mozilla.org/en-US/docs/Web/HTML`;
        case "CSS":
        return `https://developer.mozilla.org/en-US/docs/Web/CSS`;
        case "JavaScript":
        return `https://www.javascript.com/`;
        case "Node.js":
        return `https://nodejs.org/en/`;
        case "npm":
        return `https://www.npmjs.com/`;
        case "Jest":
        return `https://jestjs.io/`;
        case "SQL":
        return `https://www.mysql.com/downloads/`;
        case "MySQL":
        return `https://www.mysql.com/downloads/`;
        case "Sequelize.js":
        return `https://sequelize.org/`;
        case "NoSQL":
        return `https://en.wikipedia.org/wiki/NoSQL`;
        case "MongoDB":
        return `https://www.mongodb.com/`;
        case "Mongoose.js":
        return `https://mongoosejs.com/`;
        case "Python":
        return `https://www.python.org/`;
        case "Java":
        return `https://www.java.com/en/`;
        case "C / C++":
        return `https://www.cplusplus.com/`;
        case "C#":
        return `https://en.wikipedia.org/wiki/C_Sharp_(programming_language)`;
        case "R":
        return `https://www.r-project.org/`;
        case "Ruby":
        return `https://www.ruby-lang.org/en/`;
        case "Go / Golang":
        return `https://go.dev/`;
        case "PHP":
        return `https://www.php.net/`;
        case "Swift":
        return `https://www.swift.com/`;
        case "Rust":
        return `https://www.rust-lang.org/`;
        case "Go":
        return `https://www.boost.org/LICENSE_1_0.txt`;
        default: return "";
    };
};
  
// Create a function that returns the techology and language section of README
// If there is no techology and language section, return an empty string
function renderTechologySection(technologiesChoice) {
    if (technologiesChoice !== "None listed here") {
        return `
        ## Technologies and Languages

        - [${technologiesChoice}](${renderTechologyLink(technologiesChoice)})
        `;
    } else {
        return "";
    };
};

module.exports = { 
    insertTitleLines, 
    askQuestions, 
    inquirerHandler, 
    renderLicenseBadge,
    renderLicenseSection,
    renderTechologySection
};