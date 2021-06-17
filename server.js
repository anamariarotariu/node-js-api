const http = require("http");
const {
  getHTMLQuestions,
  getHTMLQuestionById,
  createQuestion,
  updateQuestion,
  deleteQuestion,
  getCSSQuestions,
  getCSSQuestionById,
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
  } else if (req.url === "/api/questions" && req.method === "POST") {
    createQuestion(req, res);
  } else if (
    req.url.match(/\/api\/questions\/([0-9]+)/) &&
    req.method === "PUT"
  ) {
    const id = req.url.split("/")[3];
    updateQuestion(req, res, id);
  } else if (
    req.url.match(/\/api\/questions\/([0-9]+)/) &&
    req.method === "DELETE"
  ) {
    const id = req.url.split("/")[3];
    deleteQuestion(req, res, id);
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Route not found" }));
  }
});
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
