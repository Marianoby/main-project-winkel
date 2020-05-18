var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
jwt = require('jsonwebtoken');
config = require('./jwtConfig.json');
var users = require('./routes/users');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Cache-control,Pragma,Origin,Authorization,Content-Type,X-Requested-With");
    res.header("Access-Control-Allow-Methods","GET,PUT,POST");
    if('OPTIONS'===req.method){
        res.status(204).send();
    }
    else{
        next();
    }
});
// app.use('/', users);
app.use('/api', require('./routes/index'));
module.exports = app;
