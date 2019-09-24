
app.get('/customers', function (req, res) {

    sql.connect(sqlConfig, function() {

        var request = new sql.Request();

        request.query('select * from dbo.nei_kpi_view', function(err, recordset) {

            if(err) console.log(err);

            res.end(JSON.stringify(recordset)); // Result in JSON format

        });

    });

})