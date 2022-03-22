const schema = require('../model/schema');
const home_schema = require('../model/home_model');

exports.create = async (req, res) => {
    
    try {
       // console.log(req.body);
        const contactData = new schema(req.body);
        const datas = await contactData.save();
        res.status(201).send(datas);
    }
    catch (err) { console.log(err) }

}

exports.home = async (req, res) => {
    
    try {
        console.log(req.body);
        const homeData = new home_schema(req.body);
        const data = await homeData.save();
        res.status(201).send(data);
    }
    catch (err) { console.log(err) }

}

exports.login = async (req, res) => {
        var session;
    
    try {
        let email = req.body.email;
        let password = req.body.password;
        session=req.session;
        session.userid=email;

        let logindata = await schema.findOne({ email: email });
        if (email == logindata.email && password === logindata.password) {
            res.redirect('/home');
        } 
      else {
          res.status(404).send("Invalid Credentials");
        }
      
      } catch (err) {
        console.log(err);
      }

}
exports.find = async (req, res) => {
  
    try {
        const data = await home_schema.find(req.body);
        res.status(200).send(data);
    }
    catch (err) {
        console.log(err);

    }

}
exports.logout= async(req,res) => {
    req.session.destroy();
    res.redirect('/');
}
