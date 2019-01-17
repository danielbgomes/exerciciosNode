var express = require('express');
var app = express();
var mysql      = require('mysql');

app.get('/', function (req, res) {
    res.send("Ola mundo!")
});

app.get('/mysql', function (req, res) {
    var connection = mysql.createConnection({
    host     : 'mysql995.umbler.com',
    user     : 'francisluis',
    password : 'Gold1997ab',
    database : 'exercicio4',
    port: 41890
});
 
connection.connect(function(err) {
  if (err){
    res.send('Não conectou');
  }else{
    res.send('Conectou ');
  
  }

});
 
connection.end();

});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');

});

