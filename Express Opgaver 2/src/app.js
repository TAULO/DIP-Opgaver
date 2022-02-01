const express = require("express")
const app = express()
const session = require('express-session');
app.set('view engine', 'pug')
app.use(express.static("/DIP-Opgaver/Express Opgaver 2/public"))
app.use(session({secret: 'mySecret', saveUninitialized: true, resave: true}));
app.use(express.json());

app.get("/tools", (req, res) => {
    res.render("index.pug")
    
})

app.post("/tools", (req, res) => {
    res.render("index.pug", {titl})
})

app.listen(8080, () => {
    console.log("Listening on port 8080...")
})
