module.exports = templateData => {
    //destructure projects and about data from templateData based on their property key names
    const { title, description, installation, usage, license, credits, contributions, testing, github, email } = templateData;



    return `

# ${title} ![bad math](https://img.shields.io/badge/License-${license}-blue)

## Description
    
    ${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Credits](#credits)
- [Contributions](#contributions)
- [Testing](#testing)
- [Questions](#questions)

## Installation

    ${installation}

## Usage

    ${usage}

## License

![bad math](https://img.shields.io/badge/License-${license}-blue)

    This project is using ${license}. For more information on this or other licenses please reference: [https://choosealicense.com](https;//choosealicense.com).

    ${license}

## Credits

    ${credits}

## Contributions

    ${contributions || 'This project is using [Contributor Covenant] (https://www.contributor-covenant.org/) Please read over their guidelines before contributing.'}

## Testing Instructions

    ${testing}

## Questions
    You can contact me via my [Github Profile](https://github.com/${github})
    or by email ${email} if you have any questions.
    `;
};
