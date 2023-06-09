const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// app.use is used for using different packages we imported.
// BodyParser have different methods which we can use to pass the data form into.
// 1. bodyParser.text(), 2. bodyParser.json() -> like Javascript object and 3. bodyParser.urlencoded() -> we'll use this only.

app.use(bodyParser.urlencoded({extended: true}));       // extended: true is used to allows to post nested objects.

// So from the bodyParser we're able to parse the HTTP request and urlencoded is used to access the form data (in this case num1, num2, submit).

app.get("/", function(req, res) {
    // res.send("Hello, World!");
    res.sendFile(__dirname + "/index.html");
    // sendFile is used to send a particular file at a given location rather than sending just a simple text.
    // "__dirname" -> will give the directory name (rather a path) of the current directory in which we're working in. In our case -> F:\Exploring and learning\Auriga\backend\9. ExpressJS\Calculator.
});

app.post("/", function(req, res) {                              // For posting on the route by the user. Handling post requests.
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);

    let symbol = req.body.symbol;
    let result = 0;
    console.log(symbol);

    if(symbol == "!")       result = num1 + num2;
    else if(symbol == "-")  result = num1 - num2;
    else if(symbol == "*")  result = num1 * num2;
    else if(symbol == "/")  result = num1 / num2;

    res.send(num1 + " " + symbol + " " + num2 + " = " + result);
});

app.get("/bmicalculator", function(req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/bmicalculator", function(req, res) {
    let weight = parseFloat(req.body.weight);
    let height = parseFloat(req.body.height);

    let result = weight / (height * height);

    res.send("Your BMI is: " + result);
})

app.listen(3000, function() {
    console.log("Server started at port number 3000.");
});