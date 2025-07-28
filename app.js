const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/practice")
}

main().then(()=>{
    console.log("Connected to MongoDB");
}).catch((e)=>{
    console.log("Mongodb has one Problem")
})

app.set("view engine" ,"ejs");
app.set("views", path.join(__dirname , "views"));
app.use(express.static(path.join(__dirname , "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use("/" ,require("./routes/user.js"));

app.listen(port , ()=>{
    console.log(`Server is running on port ${port}`);
})