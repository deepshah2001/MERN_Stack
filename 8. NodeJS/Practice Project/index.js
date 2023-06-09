const http = require("http");
const fs = require("fs");

const index = fs.readFileSync("./index.html", "utf-8");
const about = fs.readFileSync("./about.html", "utf-8");

const PORT = 4000;
const hostname = "localhost";

const server = http.createServer((req, res) => {
    if(req.url === "/") {
        return res.end(index);
    } else if(req.url === "/about") {
        return res.end(about);
    } else {
        return res.end("404 PAGE NOT FOUND!");
    }
});

server.listen(4000, "localhost", () => {
    console.log(`Server Established on http://${hostname}:${PORT}`);
});