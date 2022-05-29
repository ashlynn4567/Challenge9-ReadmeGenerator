// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "GNU AGPLv3":
      return `[![License: ${license}](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
    case "GNU GPLv3":
      return `[![License: ${license}](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    case "GNU LGPLv3":
      return `[![License: ${license}](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`;
    case "Mozilla":
      return `[![License: ${license}](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
    case "MIT":
      return `[![License: ${license}](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    case "Apache":
      return `[![License: ${license}](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    case "Boost":
      return `[![License: ${license}](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
    default: return "";
  };
};

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "GNU AGPLv3":
      return `https://www.gnu.org/licenses/agpl-3.0`;
    case "GNU GPLv3":
      return `https://www.gnu.org/licenses/gpl-3.0`;
    case "GNU LGPLv3":
      return `https://www.gnu.org/licenses/lgpl-3.0`;
    case "Mozilla":
      return `https://opensource.org/licenses/MPL-2.0`;
    case "MIT":
      return `https://opensource.org/licenses/MIT`;
    case "Apache":
      return `https://opensource.org/licenses/Apache-2.0`;
    case "Boost":
      return `https://www.boost.org/LICENSE_1_0.txt`;
    default: return "";
  };
};

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
function renderTechologiesAndLanguagesLink(technologiesChoice) {
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
function renderTechologiesAndLanguagesSection(technologiesChoice) {
  if (technologiesChoice !== "None listed here") {
    return `
    ## Technologies and Languages

    - [${technologiesChoice}](${renderTechologiesAndLanguagesLink(technologiesChoice)})
    `;
  } else {
    return "";
  };
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Table-of-Contents

  * [Description](#description)
  * [Deployed Site](#deployed-site)
  * [Features](#usage-and-features)
  * [Installation](#installation)
  * [Technologies and Languages](#technologies-and-languages)
  * [Future Development](#future-development)
  * [Credits](#credits)

  ## Description

  ${data.description}

  ## Deployed Site

  Follow this [link](${data.deployedSite}) to view and use our site!

  ## Features

  // loop
  ${data.featureDescription}

  <p align="center">
  <img alt="${data.featureImgAltText}" src="./dist/images/${data.featureImgFileName}"/>
  </p>    
  // end loop

  ## Installation

  ${data.installation}

  ${renderTechologiesAndLanguagesSection(data.technologiesChoice)}

  ## Future Development

  In the future, I would like to add the following improvements:

  // loop
  - ${data.suggestedFeature}
  // end loop

  I'm always interested in refactoring code to improve it's functionality. If you would like to suggest your own improvements, you can reach our development team at the links below.

  - <a href="mailto:${data.email}">Email</a>
  - <a href="https://github.com/${data.githubUsername}">GitHub</a>
  - <a href="${data.linkedInProfile}">LinkedIn</a>

  ## Credits

  This project was built with the help of the University of Oregon's Coding Boot Camp.

  ${renderLicenseSection(data.license)}`;
};

module.exports = generateMarkdown;
