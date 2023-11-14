import {PORT} from './config.js'
import express from 'express';
import mongoose from 'mongoose';
import router from './routes/bookRoute.js'

const bookRouter = router;


const app=express();
app.use(express.json())
 mongoose.connect('mongodb+srv://gr4ce001:killisai2005@cluster0.wqmguzz.mongodb.net/MERN-BOOK_STORE').then(()=>{console.log(`mongoDB connected`)}).catch((err)=>{console.log(err)})

app.use('/',bookRouter)


app.listen(PORT,()=>{console.log(`server started at port :${PORT}`)})

