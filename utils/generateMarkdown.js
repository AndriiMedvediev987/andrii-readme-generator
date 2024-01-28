// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (license.includes('MIT')) {
    return '![MIT License](https://img.shields.io/badge/License-MIT-red)';
  } else if (license.includes('Apache')) {
    return '![Apache 2.0 License](https://img.shields.io/badge/License-Apache%202.0-yellow)';
  } else if (license.includes('Mozilla')) {
    return '![Mozilla Public License 2.0](https://img.shields.io/badge/License-Mozilla%20Public%202.0-yellowgreen)';
  } else if (license.includes('GNU')) {
    return '![GNU General Public License v3.0](https://img.shields.io/badge/License-GNU%20General%20Public%20v3.0-blue)';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license.includes('MIT')) {
    return 'https://choosealicense.com/licenses/mit/';
  } else if (license.includes('Apache')) {
    return 'https://choosealicense.com/licenses/apache-2.0/';
  } else if (license.includes('Mozilla')) {
    return '!https://choosealicense.com/licenses/mpl-2.0/';
  } else if (license.includes('GNU')) {
    return 'https://choosealicense.com/licenses/gpl-3.0/';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let result = '';
  if (license) {
    result = `## License


${renderLicenseBadge(license)}

${renderLicenseLink(license)}
`;
  }
  return result;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let result = `# ${data.title}
  
## Description

${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

Please visit my GitHub profile to find more info: 
https://github.com/${data.githubusername}

Or email me:
[${data.email}](mailto:${data.email})`;

  return result;
}

module.exports = {
  generateMarkdown,
}
