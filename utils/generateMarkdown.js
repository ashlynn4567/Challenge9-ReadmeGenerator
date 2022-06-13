const helpers = require("./helpers");

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${helpers.renderLicenseBadge(data.license)}

## Table-of-Contents

* [Description](#description)
${data.confirmDeployedSite ? `* [Deployed Site](#deployed-site)` : ""}
${(data.confirmFeature) ? `* [Features](#features)` :  ""}
${data.confirmInstallation ? `* [Installation](#installation)` : ""}
${(data.technologiesChoice.length >= 1) ? `* [Technologies](#technologies)` : ""}
${data.confirmFuture ? `* [Future Development](#future-development)` : "" }
* [Credits](#credits)

## Description

${data.description}

${data.confirmDeployedSite ? `## Deployed Site

Follow [this link](${data.deployedSite}) to view and use our site!` : ""}

${data.confirmFeature ? `## Features

${helpers.renderFeatures(data.features)}` : ""}

${data.confirmInstallation ? `## Installation

${helpers.renderOrderedList(data["installation"].map((item) => item.installation))}` : "" }

${(data.technologiesChoice.length >= 1) ? `## Technologies

${helpers.renderUnorderedList(data.technologiesChoice)}` : ""}

${data.confirmFuture ? `## Future Development

In the future, I would like to add the following improvements:

${helpers.renderUnorderedList(data["future development"].map((item) => item.futureFeature))}` : "" }

I'm always interested in refactoring code to improve it's functionality. If you would like to suggest your own improvements, you can reach our development team at the links below.

- <a href="mailto:${data.email}">Email</a>
- <a href="https://github.com/${data.githubUsername}">GitHub</a>
- <a href="${data.linkedInProfile}">LinkedIn</a>

## Credits

This project was built with the help of the University of Oregon's Coding Boot Camp.

## Licensing

The application is covered under the following license: ${helpers.renderLicenseLink(data.license)}`;
};

module.exports = generateMarkdown;
