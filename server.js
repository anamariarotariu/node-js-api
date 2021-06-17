const http = require("http");
const {
  getQuestions,
  getQuestion,
  createQuestion,
  updateQuestion,
  deleteQuestion,
} = require("./controllers/questionController");
const server = http.createServer((req, res) => {
  if (req.url === "/api/questions" && req.method === "GET") {
    getQuestions(req, res);
  } else if (
    req.url.match(/\/api\/questions\/([0-9]+)/) &&
    req.method === "GET"
  ) {
    const id = req.url.split("/")[3];
    getQuestion(req, res, id);
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
