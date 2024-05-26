import mongoose, { mongo } from "mongoose";
const adminSchema=new mongoose.Schema({
  username:{type:String,require:true,unique:true},
  password:{type:String,require:true}
})
const adminModel=mongoose.model("Admin",adminSchema)
export{adminModel as Admin}