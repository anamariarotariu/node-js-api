let questions = require("../database.js");
//function for finding all questions
function findAll() {
  return questions.getAllQuestions();
}
//function for getting questions of a specific category
function findById(id) {
  return questions.getQuestionById(id);
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
  findAll,
  findById,
  create,
  update,
  remove,
};
