var newCustomerName = $("#newCustomerName").kendoTextBox().data('kendoTextBox');
var newCustomerAddress = $("#newCustomerAddress").kendoTextBox().data('kendoTextBox');
var newCustomerNumber = $("#newCustomerNumber").kendoTextBox().data('kendoTextBox');
var newCustomerRemark = $("#newCustomerRemark").kendoTextArea().data('kendoTextArea');
var newCustomerFormValidator = $("#newCustomerForm").kendoValidator().data('kendoValidator');
var newCustomerWindow = $("#newCustomerWindow").kendoWindow({
    actions: ["Maximize", "Minimize", "Close"],
    draggable: true,
    height: "auto",
    modal: true,
    pinned: false,
    resizable: false,
    title: "New Customer",
    width: "500px",
    close: function(e) {
        $('#newCustomerForm')[0].reset();
        newCustomerFormValidator.reset();
    }
}).data('kendoWindow');
newCustomerWindow.center();

var editCustomerId = $("#editCustomerId").kendoTextBox().data('kendoTextBox');
var editCustomerName = $("#editCustomerName").kendoTextBox().data('kendoTextBox');
var editCustomerAddress = $("#editCustomerAddress").kendoTextBox().data('kendoTextBox');
var editCustomerNumber = $("#editCustomerNumber").kendoTextBox().data('kendoTextBox');
var editCustomerRemark = $("#editCustomerRemark").kendoTextArea().data('kendoTextArea');
var editCustomerFormValidator = $("#editCustomerForm").kendoValidator().data('kendoValidator');
var editCustomerWindow = $("#editCustomerWindow").kendoWindow({
    actions: ["Maximize", "Minimize", "Close"],
    draggable: true,
    height: "auto",
    modal: true,
    pinned: false,
    resizable: false,
    title: "Edit Customer",
    width: "500px",
    close: function(e) {
        $('#editCustomerForm')[0].reset();
        editCustomerFormValidator.reset();
    }
}).data('kendoWindow');
editCustomerWindow.center();

function myAlert(title, content){
    $("<div></div>").kendoAlert({
      title: title,
      content: content,
      messages:{
        okText: "Ok"
      }
    }).data("kendoAlert").open();
}

$("#customerBtn").click(function(){
    $("#customerInfo").show();
    $("#salesInfo").hide();
    $("#returnInfo").hide();
    $("#historyInfo").hide();
    getAllCustomer();
});

$("#newCustomerBtn").click(function() {
    newCustomerWindow.open();
});

$("#saveNewCustomerBtn").click(function() {
    if (newCustomerFormValidator.validate()) {
        saveNewCustomer();
        newCustomerWindow.close();
        myAlert('Customer','Successfully saved!');        
        // getAllCustomer(); // 此方法移到saveNewCustomer()以確保執行順序
    }
});

$("#saveEditCustomerBtn").click(function() {
    if (editCustomerFormValidator.validate()) {
        saveEditCustomer();
        editCustomerWindow.close();
        myAlert('Customer','Successfully updated!');        
        // getAllCustomer(); // 此方法移到saveEditCustomer()以確保執行順序
    }
});

function openEditCustomerWindow(){
    editCustomerWindow.open();
}

var record = 0;
var customerDataSource = {
    data: [
        { id: 1, name: "Jane Doe", address: "Tokyo", contactNumber: "09123456" , remark: "smart!" },
        { id: 2, name: "GEG", address: "Myanmar", contactNumber: "091898456" , remark: "awsome!" }
    ],
    schema: {
        model: { id: "id" }
    },  
    batch: true,
    pageSize: 5,
    autoSync: true
}
var customerGrid = $("#customerGrid").kendoGrid({
    columns: [
        {
            title: "No.",
            template: "#= ++record #",
            width: 60
        },
        {
            field: "name",
            title: "Name/Company"
        }, {
            field: "address",
            title: "Address"
        }, {
            field: "contactNumber",
            title: "Contact Number"
        }, {
            field: "remark",
            title: "Remark"
        },
        { command: [{
            name: "Edit",
            click: function(e) {
                e.preventDefault();// prevent page scroll position change
                var tr = $(e.target).closest("tr"); // get the current table row (tr)
                var data = this.dataItem(tr);
                editCustomerId.value(data.id);
                editCustomerName.value(data.name);
                editCustomerAddress.value(data.address);
                editCustomerNumber.value(data.contactNumber);
                editCustomerRemark.value(data.remark); 
                openEditCustomerWindow();
            }
          }]
       }
    ],
    dataSource: customerDataSource,
    pageable: {
      pageSizes: true
    },
    sortable: {
        mode: "single",
        allowUnsort: false
    },
    toolbar: ["search"],
    search: {
        fields: [
            { name: "name", operator: "contains" },
            { name: "address", operator: "contains" },
            { name: "contactNumber", operator: "contains" },
            { name: "remark", operator: "contains" },
        ]
    },
    dataBinding: function() {
        record = (this.dataSource.page() -1) * this.dataSource.pageSize();
    }
}).data("kendoGrid");


function saveNewCustomer() {
    var dbConn = new mssql.ConnectionPool(sqlConfig);
    dbConn.connect().then(function () {
        var request = new mssql.Request(dbConn);
        var table = 'customer'
        var name = newCustomerName.value();
        var address = newCustomerAddress.value();
        var contactNumber = newCustomerNumber.value();
        var remark = newCustomerRemark.value();
        var sql = `insert into ${table} values('${name}','${address}','${contactNumber}','${remark}',GETDATE(),NULL)`
        request.query(sql).then(function (recordSet) {
            console.log('insert success')
            getAllCustomer(); //在此呼叫以確保執行順序
            dbConn.close();
        }).catch(function (err) {
            console.log(err);
            dbConn.close();
        });
    }).catch(function (err) {
        console.log(err);
    });
}

function saveEditCustomer() {
    var dbConn = new mssql.ConnectionPool(sqlConfig);
    dbConn.connect().then(function () {
        var request = new mssql.Request(dbConn);
        var table = 'customer'
        var id = editCustomerId.value();
        var name = editCustomerName.value();
        var address = editCustomerAddress.value();
        var contactNumber = editCustomerNumber.value();
        var remark = editCustomerRemark.value();
        var sql = `update ${table} set name='${name}',address='${address}',contactNumber='${contactNumber}',remark='${remark}',modifyDate=GETDATE() where id=${id}`
        request.query(sql).then(function (recordSet) {
            console.log('update success')
            getAllCustomer(); //在此呼叫以確保執行順序
            dbConn.close();
        }).catch(function (err) {
            console.log(err);
            dbConn.close();
        });
    }).catch(function (err) {
        console.log(err);
    });
}

function getAllCustomer() {
    var dbConn = new mssql.ConnectionPool(sqlConfig);
    dbConn.connect().then(function () {
        var request = new mssql.Request(dbConn);
        var table = 'customer'
        var sql = `select id,name,address,contactNumber,remark from ${table}`
        request.query(sql).then(function (recordSet) {
            console.log('query success');

            // reset datagrid
            customerGrid.dataSource.data([]);
            customerGrid.setDataSource([]);
            var customerDataSource = {
                data: recordSet.recordset,
                schema: {
                    model: { id: "id" }
                },  
                batch: true,
                pageSize: 5,
                autoSync: true
            }
            customerGrid.setDataSource(customerDataSource);
            customerGrid.refresh();
            dbConn.close();
        }).catch(function (err) {
            console.log(err);
            dbConn.close();
        });
    }).catch(function (err) {
        console.log(err);
    });
}