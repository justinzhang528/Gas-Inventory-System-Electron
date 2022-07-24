var mssql = require('mssql');

var sqlConfig = {
    server: '172.29.167.98',
    database: 'master',
    user: 'sa',
    password: 'justinzhang515',
    port: 1433,
    options: {
        trustedConnection: true,
        trustServerCertificate: true
    }
};

function loadAll() {

    var dbConn = new mssql.ConnectionPool(sqlConfig);

    dbConn.connect().then(function () {

        var request = new mssql.Request(dbConn);

        request.query("select * from MSreplication_options").then(function (recordSet) {
            alert('connection success')
            for(const record of recordSet.recordset){
                console.log(record)
                alert(record.optname)
            }
            dbConn.close();
        }).catch(function (err) {
            alert('connection failed')
            console.log(err);
            dbConn.close();
        });
    }).catch(function (err) {

        console.log(err);
    });
}