const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017/api",
//     { UseNewUrlParser: true, useUnifiedTopology: true }).then(() => {
//         console.log(`connection established`);
//     }).catch((err) => { console.log(err); })

const connectDB = async()=>{
    try{
        const con = await mongoose.connect(process.env.MONGO_URI,{
            UseNewUrlParser: true, 
            useUnifiedTopology: true ,
        })
        console.log("connection established");
    }
    catch(err){
    console.log(err);
    }
    }
    module.exports = connectDB;