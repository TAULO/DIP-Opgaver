const express = require("express")
const app = express()
const path = require("path");
app.use(express.static("/DIP-Opgaver/Express Opgaver/public"))


app.get("/", (req, res) => {
    console.log(__dirname)
    res.sendFile("/DIP-Opgaver/Express Opgaver/public/index.html")
})

app.listen(8082, () => {
    console.log("Listening on port 8080...")
})