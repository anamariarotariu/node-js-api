let questions = require("../database.js");
//function for finding all HTML questions
function findAllHtml() {
  questions.createTables();
  return questions.getAllHTMLQuestions();
}
//function for finding all CSS questions
function findAllCss() {
  questions.createTables();
  return questions.getAllCSSQuestions();
}
//function for getting HTML questions of a specific difficulty
function findHtmlById(id) {
  questions.createTables();
  return questions.getHTMLQuestionById(id);
}
//function for getting CSS questions of a specific difficulty
function findCssById(id) {
  questions.createTables();
  return questions.getCSSQuestionById(id);
}
module.exports = {
  findAllHtml,
  findAllCss,
  findHtmlById,
  findCssById,
};
