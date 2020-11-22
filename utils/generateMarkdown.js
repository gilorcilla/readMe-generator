// function to generate markdown for README
function generateMarkdown(userResponse, userInfo) {
  
  // Generate Table of Contents, based on userResponses
  let draftToc = `### Table of Contents`;

  if (userResponse.installation !== '') { draftToc += `
  * [Installation] (#installation)` };

  if (userResponse.usage !== '') { draftToc += `
  * [Usage] (#usage)`};

  if (userResponse.contributing)
}

module.exports = generateMarkdown;
