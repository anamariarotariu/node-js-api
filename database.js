const db = require("mysql");
const pool = db.createPool({
  connectionLimit: 10,
  password: "twdb",
  user: "tw",
  database: "tw",
  host: "localhost",
});
//function for getting all HTML questions
let getAllHTMLQuestions = () => {
  return new Promise((resolve, reject) => {
    pool.query("SELECT * FROM questionshtmlro", (error, questions) => {
      if (error) {
        return reject(error);
      }
      return resolve(questions);
    });
  });
};
//function for getting all CSS questions
let getAllCSSQuestions = () => {
  return new Promise((resolve, reject) => {
    pool.query("SELECT * FROM questionscssro", (error, cssQuestions) => {
      if (error) {
        return reject(error);
      }
      return resolve(cssQuestions);
    });
  });
};
//function for getting HTML questions based on id
let getHTMLQuestionById = (nivel_dificultate) => {
  const sqlQuery = "SELECT * FROM questionshtmlro where nivel_dificultate = ?";
  return new Promise((resolve, reject) => {
    pool.query(sqlQuery, [nivel_dificultate], (error, questionsById) => {
      if (error) {
        return reject(error);
      }
      return resolve(questionsById);
    });
  });
};
//function for getting CSS questions based on id
let getCSSQuestionById = (nivel_dificultate) => {
  const sqlQuery = "SELECT * FROM questionscssro where nivel_dificultate = ?";
  return new Promise((resolve, reject) => {
    pool.query(sqlQuery, [nivel_dificultate], (error, questionsById) => {
      if (error) {
        return reject(error);
      }
      return resolve(questionsById);
    });
  });
};
module.exports = {
  getAllHTMLQuestions,
  getHTMLQuestionById,
  getAllCSSQuestions,
  getCSSQuestionById,
};
