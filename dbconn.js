var mssql = require('mssql');
const dbinfo= require('./dbinfo.json'); 

var sqlConfig = {
    server: dbinfo.server,
    database: dbinfo.database,
    user: dbinfo.user,
    password: dbinfo.password,
    port: 1433,
    options: {
        trustedConnection: true,
        trustServerCertificate: true
    }
};

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