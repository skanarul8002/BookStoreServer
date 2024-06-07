// import not work so add type in index.js file
import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import './db.js';
import { AdminRouter } from './routes/auth.js';
import { studentRouter } from './routes/student.js';
import { bookRouter } from './routes/book.js';

//import models for get the info of totals
import { Book } from './models/Book.js';
import { Student } from './models/Student.js';
import { Admin } from './models/Admin.js';
dotenv.config();
const allowedOrigin = 'https://book-spot-sk.vercel.app';
const app=express()
app.use(express.json())
app.use(cors({
  origin:allowedOrigin,
  credentials:true
}))
app.use(cookieParser())


app.use('/auth',AdminRouter)
app.use('/student',studentRouter)
app.use('/book',bookRouter)

app.get('/dashboard',async(req,res)=>{
  try{
   const student=await Student.countDocuments()
   const admin=await Admin.countDocuments()
   const book=await Book.countDocuments()
   return res.json({ok: true,student,book,admin})
  }catch(err){
    return res.json(err)
  }
})

// app.listen(process.env.PORT,()=>{console.log("Server is running at `${process.env.PORT}`");})//wrong
app.listen(process.env.PORT,()=>{console.log(`Server is running at ${process.env.PORT}`);})  
