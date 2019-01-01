var express = require('express')
var app = express()
var mongoose = require('mongoose')
var bodyparser = require('body-parser')

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

var RegRecRouter = require('./routes/Reg_Router');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/record',RegRecRouter);


mongoose.connect("mongodb://localhost:27017/RegRecord", function(err, client) {
  if (err) {
     console.log("mongo error", err);
     return;
  }
});


var port = process.env.PORT || 3000;

app.listen(port,(err) => {
    if(err) console.log("The server is not able to run")
    console.log(`The Server is Successfully running at the port ${port}.`)
})