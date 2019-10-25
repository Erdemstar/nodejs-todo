//module
const mongoose = require("mongoose");
const add = require("./controller/addControllers");
const show = require("./controller/showControllers");
const whatidid = require("./controller/whatididControllers");
const express = require("express");


//Server
var app = express();
app.listen(3000)
app.set("view engine", "ejs");

//DB
mongoose.connect("mongodb+srv://test:test@cluster0-5zw7p.mongodb.net/test?retryWrites=true&w=majority", { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }, function (err) {
    if (err) console.log(err);
    else console.log("you are login at mongodb");
})
mongoose.set('useFindAndModify', false);


//Middleware
app.use(express.json());
app.use("/assets", express.static("public"));
app.use(function (req, res, next) {
    console.log("Requested url: " + req.url);
    next()
})
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


//Controller
whatidid(app);
show(app);
add(app);


