const Question = require("../models/questionModel");
const { getPostData } = require("../utils");
//@desc gets all question
//@route GET /api/questions
async function getQuestions(req, res) {
  try {
    const questions = await Question.findAll();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(questions));
    res.end();
  } catch (error) {
    console.log(error);
  }
}
//@desc gets a question by its id
//@route GET /api/questions/:id
async function getQuestion(req, res, id) {
  try {
    const question = await Question.findById(id);
    if (!question) {
      console.log("question not found");
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Question not found" }));
    } else {
      console.log("i found the question");
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(question));
    }
  } catch (error) {
    console.log(error);
  }
}
//@desc function for adding a new question
//@route POST /api/questions
async function createQuestion(req, res) {
  try {
    const body = await getPostData(req);
    const { id, questionBody, choice1, choice2, choice3, answer } =
      JSON.parse(body);
    const question = {
      id,
      questionBody,
      choice1,
      choice2,
      choice3,
      answer,
    };
    const newQuestion = await Question.create(question);
    res.writeHead(201, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(newQuestion));
  } catch (error) {
    console.log(error);
  }
}

//@desc function for updating a question
//@route PUT /api/questions/:id
async function updateQuestion(req, res, id) {
  try {
    const question = await Question.findById(id);
    if (!question) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Question not found" }));
    } else {
      const body = await getPostData(req);
      const { id, questionBody, choice1, choice2, choice3, answer } =
        JSON.parse(body);
      const modifiedQuestion = {
        id: id || question.id,
        questionBody: questionBody || question.body,
        choice1: choice1 || question.choice1,
        choice2: choice2 || question.choice2,
        choice3: choice3 || question.choice3,
        answer: answer || question.answer,
      };
      const upQuestion = await Question.update(id, modifiedQuestion);
      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end(JSON.stringify(upQuestion));
    }
  } catch (error) {
    console.log(error);
  }
}
//@desc function for deleting a question
//@route DELETE /api/questions/:id
async function deleteQuestion(req, res, id) {
  try {
    const question = await Question.findById(id);
    if (!question) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Question not found" }));
    } else {
      await Question.remove(id);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: `Question ${id} removed` }));
    }
  } catch (error) {
    console.log(error);
  }
}
module.exports = {
  getQuestions,
  getQuestion,
  createQuestion,
  updateQuestion,
  deleteQuestion,
};