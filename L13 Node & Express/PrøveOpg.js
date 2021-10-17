const http = require('http');
const figlet = require('figlet');
const express = require("express");
const app = express();

// http.createServer((req, res) => {
//     res.writeHead(200);
//     figlet.text("Casper elsker brunsviger", (error, data) => {
//         if(error) throw error
//         res.write(data);
//         res.end();
//     })
// }).listen(8000)

// console.log("Server started on port 8000");



app.listen(8000);
// app.get("/:text", (req, res) => {
//     figlet.text(req.params.text, (e, d) => {
//         if (e) throw e
//         res.write(d);
//         res.send();
//     })
// })

app.get("/", (req, res) => {
    res.write("<h1> hej med dig </h1>")
    res.end();
})
