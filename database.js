const db = require("mysql");
const pool = db.createPool({
  connectionLimit: 10,
  password: "twdb",
  user: "tw",
  database: "tw",
  host: "localhost",
});
//function for creating tables in db
let createTables = () => {
  pool.query(
    "CREATE TABLE IF NOT EXISTS questionshtmlro (id INT AUTO_INCREMENT PRIMARY KEY, question VARCHAR(255), choice1 VARCHAR(255), choice2 VARCHAR(255), choice3 VARCHAR(255), answer INT, nivel_dificultate INT)"
  );
  pool.query(
    "CREATE TABLE IF NOT EXISTS questionshtmleng (id INT AUTO_INCREMENT PRIMARY KEY, question VARCHAR(255), choice1 VARCHAR(255), choice2 VARCHAR(255), choice3 VARCHAR(255), answer INT, nivel_dificultate INT)"
  );
  pool.query(
    "CREATE TABLE IF NOT EXISTS questionscssro (id INT AUTO_INCREMENT PRIMARY KEY, question VARCHAR(255), choice1 VARCHAR(255), choice2 VARCHAR(255), choice3 VARCHAR(255), answer INT, nivel_dificultate INT)"
  );
  pool.query(
    "CREATE TABLE IF NOT EXISTS questionscsseng (id INT AUTO_INCREMENT PRIMARY KEY, question VARCHAR(255), choice1 VARCHAR(255), choice2 VARCHAR(255), choice3 VARCHAR(255), answer INT, nivel_dificultate INT)"
  );
};
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
//function for inserting a HTML question in db
let insertHtmlQuestion = (
  id,
  question,
  choice1,
  choice2,
  choice3,
  answer,
  nivel_dificultate
) => {
  const sqlQuery =
    "INSERT INTO questionshtmlro (id, question, choice1, choice2, choice3, answer, nivel_dificultate) VALUES (?,?,?,?,?,?,?)";
  return new Promise((resolve, reject) => {
    pool.query(
      sqlQuery,
      [id, question, choice1, choice2, choice3, answer, nivel_dificultate],
      (error, newQuestion) => {
        if (error) {
          return reject(error);
        }
        return resolve(newQuestion);
      }
    );
  });
};
//function for inserting a CSS question in db
let insertCssQuestion = (
  id,
  question,
  choice1,
  choice2,
  choice3,
  answer,
  nivel_dificultate
) => {
  const sqlQuery =
    "INSERT INTO questionscssro (id, question, choice1, choice2, choice3, answer, nivel_dificultate) VALUES (?,?,?,?,?,?,?)";
  return new Promise((resolve, reject) => {
    pool.query(
      sqlQuery,
      [id, question, choice1, choice2, choice3, answer, nivel_dificultate],
      (error, newQuestion) => {
        if (error) {
          return reject(error);
        }
        return resolve(newQuestion);
      }
    );
  });
};
module.exports = {
  createTables,
  getAllHTMLQuestions,
  getHTMLQuestionById,
  getAllCSSQuestions,
  getCSSQuestionById,
  insertHtmlQuestion,
  insertCssQuestion,
};
