'use strict'; 
// define globals
var express = require('express'),
    path = require('path'),
    app = express();
    
app.use(express.static(__dirname +  '/'));
app.get('*', function (req, res){
    res.sendFile(path.join(__dirname + '/'));
});
app.listen(8080);
  
