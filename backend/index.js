import {PORT} from './config.js'
import express from 'express';
const app=express();

app.listen(PORT,()=>{console.log(`server started at port :${PORT}`)})

