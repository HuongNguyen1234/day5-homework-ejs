const express = require("express");
const fs = require("fs");

const router = express.Router();

router
  .route("/question")
  .get(function(req, res) {
    fs.readFile("./questions.txt", "UTF-8", function(err, data) {
      if (err) {
        res.end(err);
      } else {
        const questions = data.split(/\r?\n/);
        const randomQuestion =
          questions[Math.floor(Math.random() * questions.length)];

        // Render view question.ejs to show question
        res.render("question", { question: randomQuestion });
      }
    });
  })
  .post(function(req, res) {
    fs.writeFile("./questions.txt", req.body.question, function(err, data) {
      if (err) {
        res.end("Đã có lỗi xảy ra, vui lòng thử lại");
      } else {
        res.end("Tạo câu hỏi thành công");
      }
    });
  });

module.exports = router;
