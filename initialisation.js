
var express = require('express'); // Web Framework

var app = express();

var sql = require('mssql'); // MS Sql Server client



// Connection string parameters.

var sqlConfig = {

    user: 'UserName',

    password: 'mot de passe',

    server: 'localhost',

    database: 'DatabaseName'

}



// Start server and listen on http://localhost:8081/

var server = app.listen(8081, function () {

    var host = server.address().address
    
    var port = server.address().port
    


    console.log("app listening at http://%s:%s", host, port)

});

