const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const api = require("./api");
const app = express();
const port = 3001;

// set the view engine to ejs
app.set("view engine", "ejs");
// set folter contain files view
app.set("views", path.join(__dirname, "/public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/question", function(req, res) {
  var options = {
    root: path.join(__dirname, "public")
  };
  res.render("question", options);
});

app.use(express.static("./public"));
app.use("/api", api);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
