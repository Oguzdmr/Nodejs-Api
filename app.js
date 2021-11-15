var fs = require("fs");
var express = require("express");
var path = require("path");
var app = express();
var ejsLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var db = require('./app_server/models/db');

app.set('view engine','ejs');

app.set('views', path.join(__dirname ,'/app_server/views'));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(ejsLayouts);


app.use("/public", express.static(path.join(__dirname, "public")));

require('./app_server/routers/routeManager')(app);

var User = require('./app_server/models/user');



User.find({}, (error, data) => {
    if(error){
        console.log('error var '+ error);
    }else{
        console.log('Data bulundu.' +data);
    }
});

app.listen(8000);
