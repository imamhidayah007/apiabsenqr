/**
 * Module dependencies.
 */

var express = require('express')
    , Routes = require('./routes/Routes')
    , http = require('http')
    , path = require('path');
var cors = require('cors');
var app = express();
var bodyParser=require("body-parser");
var jwt = require('jsonwebtoken');
var mysql    = require('mysql');
require('dotenv').config();

/**
 * creating mysql connection.
 */

var connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database : process.env.DB_NAME
});

connection.connect(function(err){
    if(err){
        console.log(err);
    }else{
        console.log("asek konek");
    }

});

global.db = connection;


/**
 * all environments.
 */
app.set('port', process.env.PORT || 2024);
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, X-Auth-Token");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

/**
 * routes.
 */

//app.post('/register', Daftar.daftar);

app.use('/Api', Routes)
app.use('/fotoprofil', express.static(path.join(__dirname, 'fotoprofil')))
app.use('/albumsekolah', express.static(path.join(__dirname, 'static')))


/**
 * creating server.
 */

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});
