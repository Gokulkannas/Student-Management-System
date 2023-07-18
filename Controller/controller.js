const Student = require("../Model/student");
const mongoose = require("mongoose");

exports.home = (req,res)=>{
    return res.render("home")
}

exports.student = (req,res)=>{
    return res.render("studentdetails")
}

exports.postStudent = (req,res)=>{
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
        return res.redirect("/view")
    })
    .catch((err)=>{
        console.log(err);
    })
}

exports.getview = (req,res)=>{
    Student.find({})
    .then((data)=>{

        return res.render("viewtable",{data:data});
    })
    .catch((err)=>{
        console.log(err);
    })
    
}

exports.update = (req,res)=>{
    const id = req.params.id
    Student.find({_id:id})
    .then((data)=>{
        return res.render("update",{studentData:data[0]})
    })
    .catch((err)=>{
        console.log(err);
    })
}
exports.updatepost = (req,res)=>{
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

exports.deleteStudent = (req,res)=>{
    const id = req.params.id
    Student.deleteOne({_id:id})
    .then((data)=>{
        return  res.send(
            `<script>alert('Are you sure you want to delete?'); window.location.href="/view";</script>`
          );
    })
    .catch((err)=>{
        console.log(err);
    })
}