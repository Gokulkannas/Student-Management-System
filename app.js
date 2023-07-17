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

const StudentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    father_name:{
        type:String,
        required:true
    },
    mother_name:{
        type:String,
        required:true
    },
    father_occupation:{
        type:String,
        required:true
    },
    mother_occupation:{
        type:String,
        required:true
    },
    birth:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    // photo:{
    //     data:Buffer,
    //     contentType:String
    // },
    date: {
        type: Date,
        default: Date.now(),
      }
})

const Student = mongoose.model("Student",StudentSchema)

const home = (req,res)=>{
    return res.render("home")
}

const student = (req,res)=>{
    return res.render("studentdetails")
}

const postStudent = (req,res)=>{
    const data = {
        name:req.body.name,
        father_name:req.body.fname,
        mother_name:req.body.mname,
        father_occupation:req.body.foccupation,
        mother_occupation:req.body.moccupation,
        email:req.body.email,
        mobile:req.body.mobile,
        address:req.body.address,
        birth:req.body.birth,
    }
    Student.create(data)
    .then((data)=>{
        return res.redirect("/student")
    })
    .catch((err)=>{
        console.log(err);
    })
}

const getview = (req,res)=>{
    Student.find({})
    .then((data)=>{

        return res.render("viewtable",{data:data});
    })
    .catch((err)=>{
        console.log(err);
    })
    
}

const update = (req,res)=>{
    const id = req.params.id
    Student.find({_id:id})
    .then((data)=>{
        return res.render("update",{studentData:data[0]})
    })
    .catch((err)=>{
        console.log(err);
    })
}
const updatepost = (req,res)=>{
    const id =req.params.id
    Student.updateOne({_id:id},{$set:{
        name:req.body.name,
        father_name:req.body.fname,
        mother_name:req.body.mname,
        father_occupation:req.body.foccupation,
        mother_occupation:req.body.moccupation,
        email:req.body.email,
        mobile:req.body.mobile,
        address:req.body.address,
        birth:req.body.birth,

    }})
    .then((data)=>{
        return res.redirect("/view")
    })
    .catch((err)=>{
        console.log(err);
    })
}

const deleteStudent = (req,res)=>{
    const id = req.params.id
    Student.deleteOne({_id:id})
    .then((data)=>{
        return res.redirect("/view")
    })
    .catch((err)=>{
        console.log(err);
    })
}

app.get("/",home);
app.get("/student",student);
app.post("/student",postStudent);
app.get("/view",getview);
app.get("/update/:id",update);
app.post("/update/:id",updatepost);
app.get("/delete/:id",deleteStudent);

const port=3000

app.listen(port,()=>{
    console.log("port on 3000");
})
