const axios = require("axios");

exports.homeRoutes = (req, res) => {
    res.render("index");
}

exports.register = (req, res) => {
    res.render("register");
}
exports.home = (req, res) => {
    res.render("home");
}

exports.info = (req, res) => {
    res.render("info");
}

exports.report = (req, res) => {
    res.render("report");
}

exports.users = (req, res) => {
    axios.get('http://localhost:3000/home/users').then((response)=>{
        res.render("users",{user:response.data});
    }).catch((err)=>{console.log(err)}); 
   
}





