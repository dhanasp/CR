const express=require ('express');
const morgan=require('morgan');
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fs = require("fs");
const logger=require('./src/handlers/logger').logger;
const createGame = require("./src/handlers/create_game_handler");

let app =express();
app.fs=fs;

app.use(cookieParser());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(logger);
app.use(express.static('public'));
app.get('/create-game',createGame)
module.exports=app;