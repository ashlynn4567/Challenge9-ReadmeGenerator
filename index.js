console.log("Hello");

const readmeDataArr = process.argv.slice(2, process.argv.length);
const printReadmeData = readmeDataArr => console.log(readmeDataArr);
printReadmeData(readmeDataArr);

// TODO: Include packages needed for this application
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return `# ${data.title}

### ${data.about.slogan}

${data.about.description}

## Usage and Features

// loop
${data.feature.description}

<p align="center">
<img alt="${data.feature.img.altText}" src="./dist/images/${data.feature.img.fileName}"/>
</p>    
// end loop

## Built With

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

## Suggestion Box

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

// TODO: Create a function to initialize app
function init() {
    const fileName = "README.md";
    const data = {
        title: "Password Generator", 
        about: {
            slogan: "Make your passwords more secure than ever!", 
            description: "With our new password generator app, you'll have the ability to create randomized passwords by inputting your password specifications. Need a password including capitol letters? Special Characters? We've got you covered!"
        },
        feature: {
            description: "This is how the app appears to users. It is responsive, adapting to multiple screen sizes.",
            img: {
                altText: "Screenshot of the homepage, showing a box where the generated password will appear and a button below it.",
                fileName: "homepage.jpg"
            },
        }, 
        deployedSite: "https://github.com/ashlynn4567/Password-Generator", 
        suggestedFeature: "The user will have the option to customize which special characters they would like to include in the password generator.",
        email: "ashlynn4567@gmail.com", 
        githubUsername: "ashlynn4567",
        linkedInProfile: "https://www.linkedin.com/in/ashley-lynn-smith/"
    };

    fs.writeFile("dist/README.md", writeToFile(fileName, data), err => {
        if (err) throw err;

        console.log("README complete! Check out dist/README.md to see the output!");
    });
};

// Function call to initialize app
init();
