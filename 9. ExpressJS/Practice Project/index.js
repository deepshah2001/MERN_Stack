const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const router = require("./userRoutes");

const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.json());
app.use("/api/v1",router);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + ("/index.html")));
});

// API - GET
app.get("/api/v1/login", (req, res) => {
    res.json({
        name: "Deep",
        email: "sample@gmail.com",
        password: "test"
    })
})

// app.post("/", (req, res) => {
//     res.send(`<h1>Hey, Mr. ${req.body.name}.</h1> <h2>Email: ${req.body.email} <h3>Password: ${req.body.password}`);
//     console.log(req.body);
// });

// API - POST
// app.post("/api/v1/register", (req, res) => {

//     const userName = req.body.name;
//     const userEmail = req.body.email;
//     const userPassword = req.body.password;

//     res.json({
//         success: true,
//         name: userName,
//         email: userEmail,
//         password: userPassword,
//     });
// })

app.listen(port, () => {
    console.log(`Server Established on http://localhost:${port}`);
});