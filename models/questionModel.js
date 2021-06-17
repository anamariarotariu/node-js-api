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
function create(question) {}

function update(id, question) {
  return new Promise((resolve, reject) => {
    const index = questions.findIndex(function (question) {
      return question.id == id;
    });
    questions[index] = { id, ...question };

    questions.push(questions[index]);

    resolve(questions[index]);
  });
}
function remove(id) {
  return new Promise((resolve, reject) => {
    questions = questions.filter(function (question) {
      return question.id !== id;
    });
    resolve();
  });
}
module.exports = {
  findAllHtml,
  findAllCss,
  findHtmlById,
  findCssById,
  create,
  update,
  remove,
};
