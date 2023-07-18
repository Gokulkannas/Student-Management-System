const mongoose = require("mongoose");

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
    date: {
        type: Date,
        default: Date.now(),
      }
})

const Student = mongoose.model("Student",StudentSchema)

module.exports = Student;
