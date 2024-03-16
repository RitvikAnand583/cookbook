import express from "express";
import cookieParser from "cookie-parser";
import indexRouter from './routers/index.router.js';
import userRouter from "./routers/user.router.js";
import pictureRouter from "./routers/photoUploder.routes.js"

const app = express()


app.use('/', indexRouter);


// to Except data in from of json
app.use(express.json({limit: "50mb"}))

// to Iecode the data came from urls
app.use(express.urlencoded({extended:true}))

// to store img or favicon 
// make a public folder before uncomment it
//app.use(express.static("public"))

// to perform CRUD opration in browser(cookies) of user
app.use(cookieParser())



// routes
app.use("/user" , userRouter)
app.use("/upload" , pictureRouter)


export{app}

// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

// var indexRouter = require('./routers/index.router');
// var usersRouter = require('./routers/user.router');

// var app = express();

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// module.exports = app;
