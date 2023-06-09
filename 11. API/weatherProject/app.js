const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  const query = req.body.city;
  const appId = "89fd6d27d0ffe30d38e3d983dfa5de1f";
  const unit = "metric";
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + appId + "&units=" + unit;

  https
    .get(url, function (response) {
      console.log(response.statusCode);

      response.on("data", function (data) {
        const weatherData = JSON.parse(data); // Converting into JSON format.
        // JSON.parse is used to convert an string into object format.
        // .JSON.stringfy is used to convert an object into string format.
        console.log(weatherData);
        const temp = weatherData.main.temp;
        const weatherDescription = weatherData.weather[0].description;
        console.log(temp);

        const iconCode = weatherData.weather[0].icon;
        console.log(iconCode);
        const path = "https://openweathermap.org/img/wn/" + iconCode + "@2x.png";

        // We can only send response one time in whole website i.e. (res.send) can be used only once. But we can use res.write multile times.
        res.write("<p>The weather is currently " + weatherDescription + "</p>");
        res.write("<h1>Temperature in " + query + ": " + temp + " Degrees Celcius.</h1>");
        res.write("<img src=" + path + ">");
        res.send();
        // res.sendFile(__dirname + "/index.html");
      });
    })
    .on("error", (err) => {
      console.log("Error: " + err.message);
    });

  // res.send("Hello, there!");
  console.log(req.body.city);
});

app.listen(3000, function () {
  console.log("Server Started!");
});
