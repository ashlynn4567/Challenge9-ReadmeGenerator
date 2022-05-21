// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Table-of-Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage and Features](#usage-and-features)
  * [Technologies and Languages](#technologies-and-languages)
  * [Deployed Site](#deployed-site)
  * [Future Development](#future-development)
  * [Credits](#credits)

  ## Description

  ${data.description}

  ## Installation

  ${data.installation}

  ## Usage and Features

  // loop
  ${data.feature.description}

  <p align="center">
  <img alt="${data.feature.img.altText}" src="./dist/images/${data.feature.img.fileName}"/>
  </p>    
  // end loop

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

  ## Deployed Site

  Follow this [link](${data.deployedSite}) to view and use our site!

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

  This project was built with the help of the University of Oregon's Coding Boot Camp.`;
};

module.exports = generateMarkdown;
