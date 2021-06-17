const db = require("mysql");
const pool = db.createPool({
  connectionLimit: 10,
  password: "twdb",
  user: "tw",
  database: "tw",
  host: "localhost",
});

let getAllQuestions = () => {
  return new Promise((resolve, reject) => {
    pool.query("SELECT * FROM questionshtmlro", (error, questions) => {
      if (error) {
        return reject(error);
      }
      return resolve(questions);
    });
  });
};
let getQuestionById = (nivel_dificultate) => {
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
module.exports = {
  getAllQuestions,
  getQuestionById,
};
