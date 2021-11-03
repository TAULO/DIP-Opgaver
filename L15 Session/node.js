const express = require("express");
const app = express();
const pug = require("pug");

// dette skal udføres for at anvende pug
app.set("view engine", "pug");

const session = require("express-session");
app.use(session ({
    secret: "ADADE-ADJWQ-GJALP-VJADM",
    saveUninitialized: true,
    resave: true,
    isLoggedIn: false
}))

// for at kunne læse POST datapakker
app.use(express.json());
app.use(express.urlencoded());

// en middleware fun bliver kaldt hver gang der skfites sti pga app.use()
function middlewareFun(req, res, next) {
    console.log("nu sker der noget");
    next();
}
// hvis der skrives /* så vil middleware kun køre på den sti
app.use("/produkts", middlewareFun);

app.get("/", (req, res) => {
    res.render("login");
})

app.post("/login", (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    req.session.isLoggedIn = true;
    res.redirect("/home");

    console.log(username + "    " + password);
})

app.get("/logout", (req, res) => {
    req.session.destroy((erorr) => {
        res.render("/login");
    })
});

app.get("/home", (req, res) => {
    if (req.session.isLoggedIn) {
        res.render("Home");        
    } else {
        response.send("fy fy skam dig din frække hacker");
    }
})

app.listen(5051, () => console.log("Godt arbejde"));

 