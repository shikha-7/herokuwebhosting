const express = require('express');
const app = express();
const path = require("path");

const route = require('./server/routes/routes');
const connectDB = require('./server/database/db');

dotenv.config({path:'config.env'});
const port = process.env. PORT // 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const cookieParser = require("cookie-parser");
const sessions = require('express-session');

const oneDay = 1000 * 60 * 60 * 24;

connectDB();
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));
app.use(sessions({
    secret: "mynameisshikhakumariiamfrombihar",
    saveUninitialized: true,
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
