// var mssql = require('mssql');
// const dbinfo= require('./dbinfo.json'); 

// var sqlConfig = {
//     server: dbinfo.server,
//     database: dbinfo.database,
//     user: dbinfo.user,
//     password: dbinfo.password,
//     port: 1433,
//     options: {
//         trustedConnection: true,
//         trustServerCertificate: true
//     }
// };

'use strict';
const ADODB = require('node-adodb');
const connection = ADODB.open('Provider=Microsoft.Jet.OLEDB.4.0;Data Source=GIS.mdb;');
// const connection = ADODB.open('Provider=Microsoft.ACE.OLEDB.15.0;Data Source=C:\\Users\\justinzhang\\Desktop\\Gas-Inventory-System-Electron\\GIS.accdb;Persist Security Info=False;');

// connection
//   .query('SELECT * FROM Person')
//   .then(data => {
//     console.log(JSON.stringify(data, null, 2));
//     for(i of data)
//     {
//         console.log(i.Name)
//     }
//     console.log('query successfully')
//   })
//   .catch(error => {
//     console.error(error);
//     console.log('query failed')
//   });


// connection
//   .execute('INSERT INTO Person(Name, Gender, Age, CreateDate) VALUES ("New", 1, 25, Date())')
//   .then(data => {
//     console.log(JSON.stringify(data, null, 2));
//     console.log('insert successfully')
//   })
//   .catch(error => {
//     console.error(error);
//     console.log('insert failed')
//   });