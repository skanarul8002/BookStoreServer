import mongoose from "mongoose";
const studentSchema=new mongoose.Schema({
  roll:{type:String},
  username:{type:String,require:true,unique:true},
  password:{type:String,require:true},
  grade:{type:String}
})
const studentModel=mongoose.model("Student",studentSchema)
export{studentModel as Student}