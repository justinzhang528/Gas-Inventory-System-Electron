var record = 0;

var newCustomerName = $("#newCustomerName").kendoTextBox().data('kendoTextBox');
var newCustomerRegion = $("#newCustomerRegion").kendoTextBox().data('kendoTextBox');
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
var editCustomerRegion = $("#editCustomerRegion").kendoTextBox().data('kendoTextBox');
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

function openDeleteConfirmWindow(id,deleteTitle,alertTitle,deleteFunc){
    $("<div></div>").kendoDialog({
        size: "small",
        title: deleteTitle,    
        content: "Are you sure to delete?",
        actions: [{
            text: "OK",
            action: function(e){
                // e.sender is a reference to the dialog widget object
                deleteFunc(id);
                // Returning false will prevent the closing of the dialog
                return true;
            },
            primary: true
        },{
            text: "Cancel"
        }]
      }).data('kendoDialog').open();
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
        // getAllCustomer(); // 此方法移到saveNewCustomer()以確保執行順序
    }
});

$("#saveEditCustomerBtn").click(function() {
    if (editCustomerFormValidator.validate()) {
        saveEditCustomer();
        editCustomerWindow.close();       
        // getAllCustomer(); // 此方法移到saveEditCustomer()以確保執行順序
    }
});

function openEditCustomerWindow(){
    editCustomerWindow.open();
}

var customerDataSource = {
    data: [],
    schema: {
        model: { id: "id" }
    },  
    batch: true,
    pageSize: 10,
    autoSync: true
}
var customerGrid = $("#customerGrid").kendoGrid({
    columns: [
        {
            title: "No.",
            template: "#= ++record #",
            width: 80,
            headerAttributes: {style: "font-size: 14px; font-weight: bold; color:black;"}
        },
        {
            field: "name",
            title: "Name/Company",
            headerAttributes: {style: "font-size: 14px; font-weight: bold; color:black;"}
        }, {
            field: "region",
            title: "Region",
            headerAttributes: {style: "font-size: 14px; font-weight: bold; color:black;"}
        },{
            field: "address",
            title: "Address",
            headerAttributes: {style: "font-size: 14px; font-weight: bold; color:black;"}
        },  {
            field: "contactNumber",
            title: "Contact Number",
            headerAttributes: {style: "font-size: 14px; font-weight: bold; color:black;"}
        }, {
            field: "remark",
            title: "Remark",
            headerAttributes: {style: "font-size: 14px; font-weight: bold; color:black;"}
        },
        { command: [{
            name: "Edit",
            template: '<button class="k-button k-button-solid-primary k-button-solid k-button-md k-rounded-md" onclick="onEditCustomer(this)">Edit</button>'
          },
          {
            name: "Delete",
            template: '<button class="k-button k-button-solid-secondary k-button-solid k-button-md k-rounded-md" onclick="onDeleteCustomer(this)">Delete</button>'
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
            { name: "name", operator: "equal" },
            { name: "region", operator: "equal" },
            { name: "address", operator: "equal" },
            { name: "contactNumber", operator: "equal" },
            { name: "remark", operator: "equal" },
        ]
    },
    dataBinding: function() {
        record = (this.dataSource.page() -1) * this.dataSource.pageSize();
    },
    resizable:true
}).data("kendoGrid");

function onEditCustomer(e){
    // e.preventDefault();// prevent page scroll position change
    var tr = $(e).closest("tr"); // get the current table row (tr)
    var data = customerGrid.dataItem(tr);
    editCustomerId.value(data.id);
    editCustomerName.value(data.name);
    editCustomerRegion.value(data.region);
    editCustomerAddress.value(data.address);
    editCustomerNumber.value(data.contactNumber);
    editCustomerRemark.value(data.remark); 
    openEditCustomerWindow();
}

function onDeleteCustomer(e){
    // e.preventDefault();// prevent page scroll position change
    var tr = $(e).closest("tr"); // get the current table row (tr)
    var data = customerGrid.dataItem(tr);
    openDeleteConfirmWindow(data.id,"Customer","Customer",deleteCustomer);
}

function saveNewCustomer() {
    var dbConn = new mssql.ConnectionPool(sqlConfig);
    dbConn.connect().then(function () {
        var request = new mssql.Request(dbConn);
        var table = 'customer'
        var name = newCustomerName.value();
        var region = newCustomerRegion.value();
        var address = newCustomerAddress.value();
        var contactNumber = newCustomerNumber.value();
        var remark = newCustomerRemark.value();
        var sql = `insert into ${table} values('${name}','${region}','${address}','${contactNumber}','${remark}',GETDATE(),NULL)`
        request.query(sql).then(function (recordSet) {
            console.log('insert success')
            getAllCustomer(); //在此呼叫以確保執行順序            
            myAlert('Customer','Saved Successfully!');
            dbConn.close();
        }).catch(function (err) {
            console.log(err);
            dbConn.close();
        });
    }).catch(function (err) {
        console.log(err);
        myAlert('Customer','DB Connection Error!');
    });
}

function saveEditCustomer() {
    var dbConn = new mssql.ConnectionPool(sqlConfig);
    dbConn.connect().then(function () {
        var request = new mssql.Request(dbConn);
        var table = 'customer'
        var id = editCustomerId.value();
        var name = editCustomerName.value();
        var region = editCustomerRegion.value();
        var address = editCustomerAddress.value();
        var contactNumber = editCustomerNumber.value();
        var remark = editCustomerRemark.value();
        var sql = `update ${table} set name='${name}',region='${region}',address='${address}',contactNumber='${contactNumber}',remark='${remark}',modifyDate=GETDATE() where id=${id}`
        request.query(sql).then(function (recordSet) {
            console.log('update success')
            myAlert('Customer','Updated Successfully!'); 
            getAllCustomer(); //在此呼叫以確保執行順序
            dbConn.close();
        }).catch(function (err) {
            console.log(err);
            dbConn.close();
        });
    }).catch(function (err) {
        console.log(err);
        myAlert('Customer','DB Connection Error!');
    });
}

function getAllCustomer() {
    var dbConn = new mssql.ConnectionPool(sqlConfig);
    dbConn.connect().then(function () {
        var request = new mssql.Request(dbConn);
        var table = 'customer'
        var sql = `select id,name,region,address,contactNumber,remark from ${table}`
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
                pageSize: 10,
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
        myAlert('Customer','DB Connection Error!');
    });
}

function deleteCustomer(id){
    var dbConn = new mssql.ConnectionPool(sqlConfig);
    dbConn.connect().then(function () {
        var request = new mssql.Request(dbConn);
        var table = 'customer'
        var sql = `delete from ${table} where id=${id}`
        request.query(sql).then(function (recordSet) {
            console.log('delete success');
            myAlert("Customer", "Deleted Successfully!");
            getAllCustomer(); //在此呼叫以確保執行順序
            dbConn.close();
        }).catch(function (err) {
            console.log(err);
            dbConn.close();
        });
    }).catch(function (err) {
        console.log(err);
        myAlert('Customer','DB Connection Error!');
    });
}