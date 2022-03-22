const express = require('express');
const app = express();
const path = require("path");
const port = 3000;
const route = require('./server/routes/routes');
require('./server/database/db');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const cookieParser = require("cookie-parser");
const sessions = require('express-session');

const oneDay = 1000 * 60 * 60 * 24;


app.use(sessions({
    secret: "mynameisshikhakumariiamfrombihar",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false
}));
app.use(route);

app.set("view engine", "ejs");

app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));
app.use("/img", express.static(path.resolve(__dirname, "assets/img")));
app.use(cookieParser());
app.listen(port, (req, res) => {
    console.log(`server is listing on port no.${port}`);

});