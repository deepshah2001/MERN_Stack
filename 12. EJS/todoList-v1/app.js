const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

app.set("view engine", "ejs"); // Setting our app to use ejs.

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = [];
let workItems = [];

app.get("/", function (req, res) {
  // res.render("index", {foo: 'FOO'});              // Rendering an "index.ejs" file (It uses the view engine that we setup above i.e. ejs)
  // res.send("Hello");

  let day = date.getDate();                          // Using methods as a javascript object as there are many returns in the method

  res.render("list", { listTitle: day, newTasks: items });
});

app.post("/", function (req, res) {
  let item = req.body.task;
  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work", function (req, res) {
  res.render("list", { listTitle: "Work List", newTasks: workItems });
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.listen(3000, function () {
  console.log("Server Started!");
});
