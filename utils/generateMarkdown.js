// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { 

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributers}

## Tests
${data.tests}

## License
${data.license}

## Questions
${data.username}
User's github username input is added here as well as a link to their github profile (can probably just see how github profile links are formatted and then add the user input where the username part is needed in the url)

${data.email}
${data.reach}
User email address input is added here with instructions of how to reach the user with additional questions (probably have the user input how they would like to be emailed, such as time of day/specific subject/etc)


`;
}

module.exports = generateMarkdown;
