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

function load_all() {
    var dbConn = new mssql.ConnectionPool(sqlConfig);
    dbConn.connect().then(function () {
        var request = new mssql.Request(dbConn);
        var table = 'MSreplication_options'
        var sql = `select * from ${table}`
        request.query(sql).then(function (recordSet) {
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

function on_save_func(){
  var dbConn = new mssql.ConnectionPool(sqlConfig);
  dbConn.connect().then(function () {
      var request = new mssql.Request(dbConn);      
      var hardware = $('#hardware_text').val();
      var table = 'Hardware'
      var sql = `insert into ${table} values('${hardware}')`
      request.query(sql).then(function (recordSet) {
          alert('save successful')
          dbConn.close();
      }).catch(function (err) {
          alert('save failed')
          console.log(err);
          dbConn.close();
      });
  }).catch(function (err) {
      console.log(err);
  });
  fill_dropdownlist_option()
}

function fill_dropdownlist_option(){
  var dbConn = new mssql.ConnectionPool(sqlConfig);
  dbConn.connect().then(function () {
      var request = new mssql.Request(dbConn);
      var table = 'Hardware'
      var sql = `select name from ${table}`
      var hardware_select = $("#person_select")
      hardware_select.empty()
      hardware_select.append(`<option selected>Please choose one...</option>`)
      request.query(sql).then(function (recordSet) {
        for(const record of recordSet.recordset){
          hardware_select.append(`<option value="${record.name}">${record.name}</option>`)
        }
        dbConn.close();
      }).catch(function (err) {
          alert('save failed')
          console.log(err);
          dbConn.close();
      });
  }).catch(function (err) {
      console.log(err);
  });
}

fill_dropdownlist_option()


/*
function on_conn_pg_db(){
    alert("connection start")
    // Add the credentials to access your database
    const { Pool, Client } = require('pg')
    const client = new Client({
      host     : '172.29.167.98',
      port     : '5432',
      user     : 'postgres',
      password : 'admin',
      database : 'justin_test',
    });
    client.connect()

    client.query('SELECT * from person', (err, res) => {
      if(err){
        alert('error')
      } else {
        alert('success')
        for(let row of res.rows){
          console.log(row);
        }
      }
      client.end() 
    })
}
*/