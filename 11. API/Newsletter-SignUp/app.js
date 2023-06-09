const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();

app.use(express.static("public"));                  // To use static or local files on our server.
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/signUp.html");
});

app.post("/", function(req, res) {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    
    console.log("First Name: " + firstName + "\nLast Name: " + lastName + "\nEmail: " + email);

    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };

    const jsonData = JSON.stringify(data);

    const list_id = "baba87f602";
    const url = "https://us14.api.mailchimp.com/3.0/lists/" + list_id;
    const options = {
        method: "POST",
        auth: "deep27:f0fa86af996a5363219b7525ad7cbdba-us14"
    };

    const request = https.request(url, options, function(response) {

        if(response.statusCode === 200) {
            res.sendFile(__dirname + "/success.html");
        } else {
            res.sendFile(__dirname + "/failure.html");
        }

        response.on("data", function(data) {
            console.log(JSON.parse(data));
        })
    })

    request.write(jsonData);
    request.end();
});

// process. is used to deploy it on heroku
app.listen(process.env.PORT || 3000, function() {
    console.log("Server Running!");
});

// res.redirect("path") is used to redirect to the particular page.

// API Key -> f0fa86af996a5363219b7525ad7cbdba-us14
// List ID -> baba87f602
