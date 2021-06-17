const Question = require("../models/questionModel");
//@desc gets all question
//@route GET /api/html-questions
async function getHTMLQuestions(req, res) {
  try {
    const questions = await Question.findAllHtml();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(questions));
    res.end();
  } catch (error) {
    console.log(error);
  }
}
async function getCSSQuestions(req, res) {
  try {
    const cssQuestions = await Question.findAllCss();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(cssQuestions));
    res.end();
  } catch (error) {
    console.log(error);
  }
}
//@desc gets a HTML question by its id
//@route GET /api/html-questions/:id
async function getHTMLQuestionById(req, res, id) {
  try {
    const question = await Question.findHtmlById(id);
    if (!question) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Question not found" }));
    } else {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(question));
    }
  } catch (error) {
    console.log(error);
  }
}
//@desc gets a CSS question by its id
//@route GET /api/css-questions/:id
async function getCSSQuestionById(req, res, id) {
  try {
    cssQuestion = await Question.findCssById(id);
    if (!cssQuestion) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Question not found" }));
    } else {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(cssQuestion));
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getHTMLQuestions,
  getCSSQuestions,
  getCSSQuestionById,
  getHTMLQuestionById,
};
