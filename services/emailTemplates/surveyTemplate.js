const keys = require("../../config/keys");

module.exports = survey => {
  return `  
  <html> 
  <body>
  <div style="text-align: center;">
  <h3 className="">I would like your input</h3>
  <p className="">Please answer the following question:</p>
  <p className="">${survey.body}</p>
  <div className="">
  <a href="${keys.redirectDomain}/api/surveys/${
    survey.id
  }/yes" className="">Yes</a>
  </div>
  <div className="">
  <a href="${keys.redirectDomain}/api/surveys/${
    survey.id
  }/no" className="">No</a>
  </div>
  </div>
  </body>
  </html>
  `;
};
