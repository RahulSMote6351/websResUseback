const dotenv =  require("dotenv");
dotenv.config();


const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const MongoUrl = process.env.DATABASE_URL || "";
const PORTS = process.env.PORT || 3000;

mongoose.connect(MongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err.message));


app.set("view engine" ,"ejs");
app.set("views", path.join(__dirname , "views"));
app.use(express.static(path.join(__dirname , "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use("/" ,require("./routes/user.js"));

app.listen(PORTS , ()=>{
    console.log(`Server is running on port ${PORTS}`);
})