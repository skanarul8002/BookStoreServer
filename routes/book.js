import express from "express";
import { Book } from "../models/Book.js";

import { verifyAdmin } from "./auth.js";
const router=express.Router();

router.post('/add',verifyAdmin,async(req,res)=>{
try{
  const{name,author,imageUrl,generation,yearOfPublished}=req.body

  const newbook=new Book({
    name,
    author,
     imageUrl,
     generation,
     yearOfPublished
  })
  await newbook.save()
  return res.json({added: true})
}catch(err){
  return res.json({message:"Error in adding book"})
}
})

router.get("/books",async(req,res)=>{
  try{
const books=await Book.find()
return res.json(books)
  }catch(err){
    return res.json(err)
  }
})

router.get('/book/:id',async(req,res)=>{
  try{
    const id=req.params.id;
    const book=await Book.findById({_id: id})
    return res.json(book)
  } catch(err){
    return res.json(err)
  }
})

router.put('/book/:id',async(req,res)=>{
  try{
    const id=req.params.id;
    const book=await Book.findByIdAndUpdate({_id: id},req.body)
    return res.json({updated: true,book})
  } catch(err){
    return res.json(err)
  }
})

router.delete('/book/:id',async(req,res)=>{
  try{
    const id=req.params.id;
    const book=await Book.findByIdAndDelete({_id: id})
    return res.json({deleted: true,book})
  } catch(err){
    return res.json(err)
  }
})

export {router as bookRouter}
//use in index.js
