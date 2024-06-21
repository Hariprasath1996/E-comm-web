const express = require ('express');

// create app for express
const app = express(); 
const dotenv=require('dotenv');
const path=require('path')
// here dirname is the folder path BackEnd
dotenv.config({path: path.join(__dirname,'config','config.env') });

// routes
const products = require('./routes/product')
const orders = require('./routes/order')

// prefix url state
app.use('/api/v1/',products);
app.use('/api/v1',orders)


app.listen (process.env.PORT,()=>{
    console.log(
        `server listening to the port ${process.env.PORT} in ${process.env.NODE_ENV}`
    );
})
