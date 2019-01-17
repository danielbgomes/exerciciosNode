var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'mysql995.umbler.com:41890',
  user     : 'francisluis',
  password : 'Gold1997ab',
  database : 'exercicio4'
});
 
connection.connect();
 if(connect){
    print("tudo OK");
 }else{
     print("ERROU");
 }
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
 
connection.end();