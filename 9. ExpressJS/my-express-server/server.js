// Express - It is a nodeJs framework used to make our code more good and our life easy (just like using jQuery in JS). Used to don't write more repetitive code especially for web applications.

const express = require("express");         // Importing express
const app = express();                      // a constant used to represent express module.

// app.get() is the method provided by express used to route the callback function to the route provided
// Syntax -> app.get("location", callback function);

// Home Route
app.get("/", function(req, res) {
    // console.log(req);
    res.send("<h1>Hello, World!</h1>");             // send this response whenever request to that particular port is requested / happened.
});

// Contact Route
app.get("/contact", function(req, res) {
    res.send("Contact me at: shahdeep020@gmail.com");
});

// About Route
app.get("/about", function(req, res) {
    res.send("Welcome there, My name is Deep Shah, a Computer Science Engineer. Right now, You're at a server made using express and node.");
});

// app.listen(3000);                        // Started server at port 3000
app.listen(3000, function() {               // Created a callback function (Setup and started server at 3000)
    console.log("Server started at port 3000");
});