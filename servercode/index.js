var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');

var app = express();

mongoose.connect('mongodb+srv://purroadmin:purroadmin@cluster0-oew8a.gcp.mongodb.net/test?retryWrites=true&w=majority');

mongoose.connection.on('connected',()=>{
    console.log("Successfully connected to MongoDB - purro database")
});
mongoose.connection.on('error',()=>{
    console.log("Error when connecting to MongoDB - purro database:" +err);
});

const PORT = 3000;

app.listen(PORT,()=>{
    console.log("Server started at port: "+ PORT);
});