let questions = require("../database.js");
//function for finding all HTML questions
function findAllHtml() {
  return questions.getAllHTMLQuestions();
}
//function for finding all CSS questions
function findAllCss() {
  return questions.getAllCSSQuestions();
}
//function for getting HTML questions of a specific difficulty
function findHtmlById(id) {
  return questions.getHTMLQuestionById(id);
}
//function for getting CSS questions of a specific difficulty
function findCssById(id) {
  return questions.getCSSQuestionById(id);
}
module.exports = {
  findAllHtml,
  findAllCss,
  findHtmlById,
  findCssById,
};
