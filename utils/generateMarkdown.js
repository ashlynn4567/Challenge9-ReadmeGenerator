const helpers = require("./helpers");

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${helpers.renderLicenseBadge(data.license)}

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

  ${helpers.renderTechologySection(data.technologiesChoice)}

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

  ${helpers.renderLicenseSection(data.license)}`;
};

module.exports = generateMarkdown;
