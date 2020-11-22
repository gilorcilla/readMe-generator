// function to generate markdown for README
function generateMarkdown(userResponse, userInfo) {
  
  // Generate Table of Contents, based on userResponses
  let draftToc = `## Table of Contents`;

  if (userResponse.installation !== '') { draftToc += `
  * [Installation] (#installation)` };

  if (userResponse.usage !== '') { draftToc += `
  * [Usage] (#usage)`};

  if (userResponse.contributing !== '') { draftToc += `
  * [Contributing] (#contributing)`};

  If (userResponse.tests !== '') { draftToc += `
  * [Tests] (#tests)`};

  // Generate markdown for the upper portion of the README.md file
  let draftMarkdown = `# ${userResponse.title}
  
  ![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/${userResponses.username}/${userResponse.repo}?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/${userResponses.username}/${userResponses.repo}?style=flat&logo=appveyor)
  
  Check out the badges hosted by [shields.io](https://shields.io).
  
  ## Description
  
  * The what , why, and how:*
  
  ${userResponses.description}
  
  `

  // Add Table of Contents (Toc) to markdown
  draftMarkdown += draftToc;

  // Add License section since it is required to Table of Contents
  draftMarkdown += ` * [License](#license)`;

  // Optional Installation section
  if (userResponses.installation !== '') {}
}

module.exports = generateMarkdown;
