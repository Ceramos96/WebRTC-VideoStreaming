var express = require('express');
var path = require('path');
const app = express();

app.use(express.static(__dirname + '/'));


app.listen(3000, function(){
    console.log('Connected Successfull!');
});