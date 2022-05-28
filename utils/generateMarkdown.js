// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "GNU AGPLv3") {
    return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
  } else if (license === "GNU GPLv3") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license === "GNU LGPLv3") {
    return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
  } else if (license === "Mozilla") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  } else if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "Apache") {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "Boost") {
    return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
  } else {
    return "";
  };
};

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "GNU AGPLv3") {
    return `https://www.gnu.org/licenses/agpl-3.0`;
  } else if (license === "GNU GPLv3") {
    return `https://www.gnu.org/licenses/gpl-3.0`;
  } else if (license === "GNU LGPLv3") {
    return `https://www.gnu.org/licenses/lgpl-3.0`;
  } else if (license === "Mozilla") {
    return `https://opensource.org/licenses/MPL-2.0`;
  } else if (license === "MIT") {
    return `https://opensource.org/licenses/MIT`;
  } else if (license === "Apache") {
    return `https://opensource.org/licenses/Apache-2.0`;
  } else if (license === "Boost") {
    return `https://www.boost.org/LICENSE_1_0.txt`;
  } else {
    return "";
  };
};

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "No license") {
    return `
  ## Licensing 

  The application is covered under the following license: [${license}](${renderLicenseLink(
      license
    )})
    `;
  } else {
    return "";
  };
};

// Create a function that returns the license link
// If there is no license, return an empty string
function renderTechologiesAndLanguagesLink(technologiesChoice) {
  for (i = 0; i <technologiesChoice.length; i++) {
    if (technologiesChoice[i] === "HTML") {
      return `https://developer.mozilla.org/en-US/docs/Web/HTML`;
    } else if (technologiesChoice[i] === "CSS") {
      return `https://developer.mozilla.org/en-US/docs/Web/CSS`;
    } else if (technologiesChoice[i] === "JavaScript") {
      return `https://www.javascript.com/`;
    } else if (technologiesChoice[i] === "Node.js") {
      return `https://nodejs.org/en/`;
    } else if (technologiesChoice[i] === "npm") {
      return `https://www.npmjs.com/`;
    } else if (technologiesChoice[i] === "Jest") {
      return `https://jestjs.io/`;
    } else if (technologiesChoice[i] === "SQL") {
      return `https://en.wikipedia.org/wiki/SQL`;
    } else if (technologiesChoice[i] === "MySQL") {
      return `https://www.mysql.com/downloads/`;
    } else if (technologiesChoice[i] === "Sequelize.js") {
      return `https://sequelize.org/`;
    } else if (technologiesChoice[i] === "NoSQL") {
      return `https://en.wikipedia.org/wiki/NoSQL`;
    } else if (technologiesChoice[i] === "MongoDB") {
      return `https://www.mongodb.com/`;
    } else if (technologiesChoice[i] === "Mongoose.js") {
      return `https://mongoosejs.com/`;
    } else if (technologiesChoice[i] === "Python") {
      return `https://www.python.org/`;
    } else if (technologiesChoice[i] === "Java") {
      return `https://www.java.com/en/`;
    } else if (technologiesChoice[i] === "C / C++") {
      return `https://www.cplusplus.com/`;
    } else if (technologiesChoice[i] === "C#") {
      return `https://en.wikipedia.org/wiki/C_Sharp_(programming_language)`;
    } else if (technologiesChoice[i] === "R") {
      return `https://www.r-project.org/`;
    } else if (technologiesChoice[i] === "Ruby") {
      return `https://www.ruby-lang.org/en/`;
    } else if (technologiesChoice[i] === "Go / Golang") {
      return `https://go.dev/`;
    } else if (technologiesChoice[i] === "PHP") {
      return `https://www.php.net/`;
    } else if (technologiesChoice[i] === "Swift") {
      return `https://www.swift.com/`;
    } else if (technologiesChoice[i] === "Rust") {
      return `https://www.rust-lang.org/`;
    } else if (technologiesChoice[i] === "Go") {
      return `https://www.boost.org/LICENSE_1_0.txt`;
    } else {
      return "";
    };
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

  ## Technologies and Languages

  - [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  - [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
  - [Node.js](https://nodejs.org/en/)
  - [Express.js](https://www.npmjs.com/package/express)
  - [mySQL2](https://www.npmjs.com/package/mysql2)
  - [Sequelize.js](https://sequelize.org/)
  - [dotenv](https://www.npmjs.com/package/dotenv)
  - [bcrypt](https://www.npmjs.com/package/bcrypt)
  - [Handlebars.js](https://handlebarsjs.com/)
  - [Heroku](https://www.heroku.com/)

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
