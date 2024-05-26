import mongoose from "mongoose";
const bookSchema=new mongoose.Schema({
  name:{type:String},
  author:{type:String,require:true},
  imageUrl:{type:String,require:true},
  generation: { type: String },
  yearOfPublished: { type: Number }
})
const bookModel=mongoose.model("Book",bookSchema)
export{bookModel as Book}
//goto book routes