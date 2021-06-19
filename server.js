const http = require("http");
const {
  getHTMLQuestions,
  getHTMLQuestionById,
  getCSSQuestions,
  getCSSQuestionById,
  insertHTMLQuestion,
  insertCSSQuestion,
  deleteHtmlQuestion,
  deleteCssQuestion,
} = require("./controllers/questionController");
const server = http.createServer((req, res) => {
  if (req.url === "/api/html-questions" && req.method === "GET") {
    getHTMLQuestions(req, res);
  } else if (req.url === "/api/css-questions" && req.method === "GET") {
    getCSSQuestions(req, res);
  } else if (
    req.url.match(/\/api\/html-questions\/([0-9]+)/) &&
    req.method === "GET"
  ) {
    const id = req.url.split("/")[3];
    getHTMLQuestionById(req, res, id);
  } else if (
    req.url.match(/\/api\/css-questions\/([0-9]+)/) &&
    req.method === "GET"
  ) {
    const id = req.url.split("/")[3];
    getCSSQuestionById(req, res, id);
  } else if (req.url === "/api/html-questions/add" && req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      const result = JSON.parse(body);
      insertHTMLQuestion(
        req,
        res,
        result.id,
        result.question,
        result.choice1,
        result.choice2,
        result.choice3,
        result.answer,
        result.nivel_dificultate
      );
    });
  } else if (req.url === "/api/css-questions/add" && req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      const result = JSON.parse(body);
      insertCSSQuestion(
        req,
        res,
        result.id,
        result.question,
        result.choice1,
        result.choice2,
        result.choice3,
        result.answer,
        result.nivel_dificultate
      );
    });
  } else if (
    req.url.match(/\/api\/html-questions\/delete\/([0-9]+)/) &&
    req.method === "DELETE"
  ) {
    const id = req.url.split("/")[4];
    deleteHtmlQuestion(req, res, id);
  } else if (
    req.url.match(/\/api\/css-questions\/delete\/([0-9]+)/) &&
    req.method === "DELETE"
  ) {
    const id = req.url.split("/")[4];
    deleteCssQuestion(req, res, id);
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Route not found" }));
  }
});
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
