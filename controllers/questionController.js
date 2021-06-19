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
//@desc post a new HTML question in db
//@route POST /api/css-questions/add
async function insertHTMLQuestion(
  req,
  res,
  id,
  question,
  choice1,
  choice2,
  choice3,
  answer,
  nivel_dificultate
) {
  try {
    newQuestion = await Question.insertHtmlQuestion(
      id,
      question,
      choice1,
      choice2,
      choice3,
      answer,
      nivel_dificultate
    );
    if (!newQuestion) {
      res.writeHead(409, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Question was not added in db" }));
    } else {
      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify(newQuestion));
    }
  } catch (error) {
    console.log(error);
  }
}
//@desc post a new HTML question in db
//@route POST /api/html-questions/add
async function insertCSSQuestion(
  req,
  res,
  id,
  question,
  choice1,
  choice2,
  choice3,
  answer,
  nivel_dificultate
) {
  try {
    newQuestion = await Question.insertCssQuestion(
      id,
      question,
      choice1,
      choice2,
      choice3,
      answer,
      nivel_dificultate
    );
    if (!newQuestion) {
      res.writeHead(409, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Question was not added in db" }));
    } else {
      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify(newQuestion));
    }
  } catch (error) {
    console.log(error);
  }
}
//@desc delete a HTML question from db
//@route DELETE /api/html-questions/:id
async function deleteHtmlQuestion(req, res, id) {
  try {
    deletedQuestion = await Question.deleteHtmlQuestion(id);
    if (!deletedQuestion) {
      res.writeHead(409, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Question was not deleted from db" }));
    } else {
      res.writeHead(204, { "Content-Type": "application/json" });
      res.end(JSON.stringify(deletedQuestion));
    }
  } catch (erorr) {
    console.log(error);
  }
}
//@desc delete a CSS question from db
//@route DELETE /api/css-questions/:id
async function deleteCssQuestion(req, res, id) {
  try {
    deletedQuestion = await Question.deleteCssQuestion(id);
    if (!deletedQuestion) {
      res.writeHead(409, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Question was not added in db" }));
    } else {
      res.writeHead(204, { "Content-Type": "application/json" });
      res.end(JSON.stringify(deletedQuestion));
    }
  } catch (erorr) {
    console.log(error);
  }
}
module.exports = {
  getHTMLQuestions,
  getCSSQuestions,
  getCSSQuestionById,
  getHTMLQuestionById,
  insertHTMLQuestion,
  insertCSSQuestion,
  deleteHtmlQuestion,
  deleteCssQuestion,
};
