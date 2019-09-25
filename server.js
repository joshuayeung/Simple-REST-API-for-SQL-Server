
var express = require('express'); // Web Framework

var app = express();

var sql = require('mssql'); // MS Sql Server client



// Connection string parameters.

var sqlConfig = {

    user: 'nqmweb',

    password: 'cmhk2@19',

    server: '10.250.31.133\\SHAREPOINTSQL',

    database: 'cmhk'

}



// Start server and listen on http://localhost:8081/

var server = app.listen(8081, function () {

    var host = server.address().address
    
    var port = server.address().port
    


    console.log("app listening at http://%s:%s", host, port)

});

app.get('/sql/:sql/', function (req, res) {
    sql.connect(sqlConfig, function() {
        var request = new sql.Request();
        var stringRequest = req.params.sql;
        request.query(stringRequest, function(err, recordset) {
            if(err) console.log(err);
            res.end(JSON.stringify(recordset)); // Result in JSON format
        });
    });
})


app.get('/customers', function (req, res) {

    sql.connect(sqlConfig, function() {

        var request = new sql.Request();

        request.query('select * from dbo.relation_table_internet_exit', function(err, recordset) {

            if(err) console.log(err);

            res.end(JSON.stringify(recordset)); // Result in JSON format

        });

    });

})