const User = require("../models/user.js");

module.exports.RenderPage = (req,res)=>{
    try{
        res.render("index.ejs");
    }catch(e){
        console.log(e);
    }
}
module.exports.HomePage = async(req,res)=>{
    try{
        const {name , email , message}= req.body;
        const user = new User({
            name: name,
            email: email,
            message: message
        });
       await user.save()
       console.log("data saved successfully");
       res.redirect("/")
    }
    catch(e){
        console.log(e);
    }
}