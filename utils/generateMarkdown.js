// function to generate markdown for README
function generateMarkdown(userResponses, userInfo) {
  // Generate Table of Contents, based on userResponses
  let draftToc = `## Table of Contents`;

  if (userResponses.installation !== "") {
    draftToc += `
  * [Installation] (#installation)`;
  }

  if (userResponses.usage !== "") {
    draftToc += `
  * [Usage] (#usage)`;
  }

  // if (userResponses.contributing !== "") {
  //   draftToc += `
  // * [Contributing] (#contributing)`;
  // }

  // If(userResponses.tests !== "");
  // {
  //   draftToc += `
  //   * [Tests] (#tests)`;
  // }

  // Generate markdown for the upper portion of the README.md file
  let draftMarkdown = `# ${userResponses.title}
  
  ![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/${userResponses.username}/${userResponses.repo}?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/${userResponses.username}/${userResponses.repo}?style=flat&logo=appveyor)
  
  Check out the badges hosted by [shields.io](https://shields.io).
  
  ## Description
  
  * The what , why, and how:*
  
  ${userResponses.description}
  
  `;

  // Add Table of Contents (Toc) to markdown
  draftMarkdown += draftToc;

  // Add License section since it is required to Table of Contents
  draftMarkdown += ` * [License](#license)`;

  // Optional Installation section
  if (userResponses.installation !== "") {
    draftMarkdown += `
     ## Installation
     
     *Steps needed to install project and how to get the development environment running:*
     
     ${userResponses.installation}`;
  }

  // Optional Usage section
  if (userResponses.usage !== "") {
    draftMarkdown += `
    
    ## Usage
    
    *Instructions and examples for use:*
    
    ${userResponses.usage}`;
  }

  // Methodology Section
  if (userResponses.methodology !== "") {
    draftMarkdown += `
    
    ## Methdodology
    
    *Contextual framework:*
    
    ${userResponses.methodology}`;
  }
  //Optional Constributing section
  if (userResponses.contributing !== "") {
    draftMarkdown += `

     ## Contributing

     *If you want to contribute, follow the instructions on how to do so.*

     ${userResponses.contributing}`;
  }

  // License section requirement
  if (userResponses.license !== "") {
    draftMarkdown += `
  
  ## License
  
  *Pick a license:*

  ${userResponses.license}`;
  }
  // Questions/About the developer section
  let draftDev = `
  ----
  
  ## Questions?
  
  
  ![Developer Profile Picture](${"./My_Picture.pdf"})
  
  
  For any questions, please dont hesitate to contact me with my info below:
  
  GitHub: [@${"mathanasiumcos"}](${"https://github.com/gilorcilla"})`;

  // if GitHub email is not null, add Developer section
  if ("mathnasiumcos@.com" !== null) {
    draftDev += `
    
    Email: ${"mathnasiumcos@.com"}
    
    `;
  }

  // Add developer section to markdown
  draftMarkdown += draftDev;

  // Return markdown
  return draftMarkdown;
}

module.exports = generateMarkdown;
