
const express = require('express');
const app = express();

app.get('/', function(req,res){
	res.send('Olar mundo!');

});

app.listen(3000, function () {

console.log('Listening on 3000');

});
