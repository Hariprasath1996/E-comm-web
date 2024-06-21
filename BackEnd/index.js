const express = require ('express');

// create app for express
const app = express(); 
const dotenv=require('dotenv');
const path=require('path')
// here dirname is the folder path BackEnd
dotenv.config({path: path.join(__dirname,'config','config.env') });


app.listen (8000,()=>{
    console.log(
        "server listening to the port 8000 in production"
    );
})
//  install env package 