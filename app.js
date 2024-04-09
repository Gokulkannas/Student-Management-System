const express = require("express")
const ejs = require("ejs")
const mongoose = require("mongoose")
const bodyParser = require("body-parser");
// const multer =require("multer");

  
const app=express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.set("view engine","ejs");
app.set("views","./html")

mongoose.connect("mongodb+srv://gokulkannas20msc:vscode1234@cluster0.z9hspc4.mongodb.net/Student")
.then(()=>{
    console.log("db is connected");
})
.catch(()=>{
    console.log(err);
})

app.use("/", require("./Routes/route"));


const port=3000

app.listen(port,()=>{
    console.log("port on 3000");
})
