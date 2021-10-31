// opgave 13.1
const http = require("http");
const fs = require("fs").promises;

function genererLinks(filnavn) {
    let htlm = '';
    for (let filnavn of filnavn) {
        html += '<a href="' + filnavn + '">' + filnavn + '</a><br>\n';
    }
    return html;
}

http.createServer(async (req, res) => {
    if (req.url === '/') {
        let filnavn = await fs.readdir(__dirname + "/filer"); 
        let html = genererLinks(filnavn);
        res.writeHead(200, {"content-type": "text/html"}) // gucci
        res.write(html);
    } else {
        try {
        let sti = __dirname + "/filer" + req.url;
        let filData = await fs.readFile(sti);
        res.writeHead(200) // gucci
        res.write(filData);
        } catch (e) {
            res.writeHead(404) // error
            res.write("Ikke godt..:((");
        }
    }
    res.end(); 
}).listen(8080);

console.log("Ja tjak!");