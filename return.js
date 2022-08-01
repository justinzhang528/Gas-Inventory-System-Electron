var returnCategoryDataSource = [
    {"text": "", "value": ""},
    {"text": "Oxygen(O2)", "value": "1"},
    {"text": "Nitrogen(N2)", "value": "2"},
    {"text": "Carbon Dioxide(CO2)", "value": "3"},
    {"text": "Argon(Ar)", "value": "4"},
    {"text": "Acetylene(C2H2)", "value": "5"},
    {"text": "Other", "value": "0"},
]
var returnWeightDataSource = [
    {"text": "", "value": ""},
    {"text": "15", "value": "15"},
    {"text": "20", "value": "20"},
    {"text": "48", "value": "48"},
    {"text": "Other", "value": "0"},
]
var newReturnDate = $("#newReturnDate").kendoDatePicker({
    format: "MM/dd/yyyy"
}).data('kendoDatePicker');
var newReturnName = $("#newReturnName").kendoDropDownList({
    dataTextField: "text",
    dataValueField: "value",
    dataSource: []
  }).data('kendoDropDownList');
var newReturnCategory = $("#newReturnCategory").kendoDropDownList({
    dataTextField: "text",
    dataValueField: "value",
    dataSource: [
        {"text": "", "value": ""},
        {"text": "Oxygen(O2)", "value": "1"},
        {"text": "Nitrogen(N2)", "value": "2"},
        {"text": "Carbon Dioxide(CO2)", "value": "3"},
        {"text": "Argon(Ar)", "value": "4"},
        {"text": "Acetylene(C2H2)", "value": "5"},
        {"text": "Other", "value": "0"},
    ]
  }).data('kendoDropDownList');
var newReturnWeight = $("#newReturnWeight").kendoDropDownList({
    dataTextField: "text",
    dataValueField: "value",
    dataSource: [
        {"text": "", "value": ""},
        {"text": "15", "value": "15"},
        {"text": "20", "value": "20"},
        {"text": "48", "value": "48"},
        {"text": "Other", "value": "0"},
    ]
  }).data('kendoDropDownList');
var newReturnQuantity = $("#newReturnQuantity").kendoTextBox().data('kendoTextBox');
var newReturnRemark = $("#newReturnRemark").kendoTextArea().data('kendoTextArea');
var newReturnCategory2 = $("#newReturnCategory2").kendoDropDownList({
    dataTextField: "text",
    dataValueField: "value",
    dataSource: returnCategoryDataSource
  }).data('kendoDropDownList');
var newReturnWeight2 = $("#newReturnWeight2").kendoDropDownList({
    dataTextField: "text",
    dataValueField: "value",
    dataSource: returnWeightDataSource
  }).data('kendoDropDownList');
var newReturnQuantity2 = $("#newReturnQuantity2").kendoTextBox().data('kendoTextBox');
var newReturnRemark2 = $("#newReturnRemark2").kendoTextArea().data('kendoTextArea');
var newReturnCategory3 = $("#newReturnCategory3").kendoDropDownList({
    dataTextField: "text",
    dataValueField: "value",
    dataSource: returnCategoryDataSource
  }).data('kendoDropDownList');
var newReturnWeight3 = $("#newReturnWeight3").kendoDropDownList({
    dataTextField: "text",
    dataValueField: "value",
    dataSource: returnWeightDataSource
  }).data('kendoDropDownList');
var newReturnQuantity3 = $("#newReturnQuantity3").kendoTextBox().data('kendoTextBox');
var newReturnRemark3 = $("#newReturnRemark3").kendoTextArea().data('kendoTextArea');
var newReturnCategory4 = $("#newReturnCategory4").kendoDropDownList({
    dataTextField: "text",
    dataValueField: "value",
    dataSource: returnCategoryDataSource
  }).data('kendoDropDownList');
var newReturnWeight4 = $("#newReturnWeight4").kendoDropDownList({
    dataTextField: "text",
    dataValueField: "value",
    dataSource: returnWeightDataSource
  }).data('kendoDropDownList');
var newReturnQuantity4 = $("#newReturnQuantity4").kendoTextBox().data('kendoTextBox');
var newReturnRemark4 = $("#newReturnRemark4").kendoTextArea().data('kendoTextArea');
var newReturnCategory5 = $("#newReturnCategory5").kendoDropDownList({
    dataTextField: "text",
    dataValueField: "value",
    dataSource: returnCategoryDataSource
  }).data('kendoDropDownList');
var newReturnWeight5 = $("#newReturnWeight5").kendoDropDownList({
    dataTextField: "text",
    dataValueField: "value",
    dataSource: returnWeightDataSource
  }).data('kendoDropDownList');
var newReturnQuantity5 = $("#newReturnQuantity5").kendoTextBox().data('kendoTextBox');
var newReturnRemark5 = $("#newReturnRemark5").kendoTextArea().data('kendoTextArea');
var newReturnCategory6 = $("#newReturnCategory6").kendoDropDownList({
    dataTextField: "text",
    dataValueField: "value",
    dataSource: returnCategoryDataSource
  }).data('kendoDropDownList');
var newReturnWeight6 = $("#newReturnWeight6").kendoDropDownList({
    dataTextField: "text",
    dataValueField: "value",
    dataSource: returnWeightDataSource
  }).data('kendoDropDownList');
  var newReturnQuantity6 = $("#newReturnQuantity6").kendoTextBox().data('kendoTextBox');
  var newReturnRemark6 = $("#newReturnRemark6").kendoTextArea().data('kendoTextArea');
var newReturnFormValidator = $("#newReturnForm").kendoValidator().data('kendoValidator');
var newReturnWindow = $("#newReturnWindow").kendoWindow({
    actions: ["Maximize", "Minimize", "Close"],
    draggable: true,
    height: "auto",
    modal: true,
    pinned: false,
    resizable: false,
    title: "New Return",
    width: "800px",
    open: function(e) {
        $('#newReturnForm')[0].reset();
        newReturnFormValidator.reset();
    }
}).data('kendoWindow');
newReturnWindow.center();

var editReturnId = $("#editReturnId").kendoTextBox().data('kendoTextBox');
var editReturnDate = $("#editReturnDate").kendoDatePicker({
    format: "MM/dd/yyyy"
}).data('kendoDatePicker');
var editReturnCustomerId = $("#editReturnCustomerId").kendoTextBox().data('kendoTextBox');
var editReturnName = $("#editReturnName").kendoDropDownList({
    dataTextField: "text",
    dataValueField: "value",
    dataSource: []
  }).data('kendoDropDownList');
var editReturnCategoryId = $("#editReturnCategoryId").kendoTextBox().data('kendoTextBox');
var editReturnCategory = $("#editReturnCategory").kendoDropDownList({
    dataTextField: "text",
    dataValueField: "value",
    dataSource: [
        {"text": "", "value": ""},
        {"text": "Oxygen(O2)", "value": "1"},
        {"text": "Nitrogen(N2)", "value": "2"},
        {"text": "Carbon Dioxide(CO2)", "value": "3"},
        {"text": "Argon(Ar)", "value": "4"},
        {"text": "Acetylene(C2H2)", "value": "5"},
        {"text": "Other", "value": "0"},
    ]
  }).data('kendoDropDownList');
var editReturnWeight = $("#editReturnWeight").kendoDropDownList({
    dataTextField: "text",
    dataValueField: "value",
    dataSource: [
        {"text": "", "value": ""},
        {"text": "15", "value": "15"},
        {"text": "20", "value": "20"},
        {"text": "48", "value": "48"},
        {"text": "Other", "value": "0"},
    ]
  }).data('kendoDropDownList');
var editReturnQuantity = $("#editReturnQuantity").kendoTextBox().data('kendoTextBox');
var editReturnRemark = $("#editReturnRemark").kendoTextArea().data('kendoTextArea');
var editReturnFormValidator = $("#editReturnForm").kendoValidator().data('kendoValidator');
var editReturnWindow = $("#editReturnWindow").kendoWindow({
    actions: ["Maximize", "Minimize", "Close"],
    draggable: true,
    height: "auto",
    modal: true,
    pinned: false,
    resizable: false,
    title: "Edit Return",
    width: "500px",
    close: function(e) {
        editReturnFormValidator.reset();
    }
}).data('kendoWindow');
editReturnWindow.center();

$("#returnBtn").click(function(){
    $("#customerInfo").hide();
    $("#salesInfo").hide();
    $("#returnInfo").show();
    $("#historyInfo").hide();
    getAllReturn();
  });

$("#newReturnBtn").click(function() {
    populateCustomerDropDownList(newReturnName,null);
    newReturnWindow.open();
});

$("#saveNewReturnBtn").click(function() {
    if (newReturnFormValidator.validate()) {
        saveNewReturn();
        newReturnWindow.close();
        myAlert('Return','Successfully saved!');        
        // getAllReturn(); // 此方法移到saveEditReturn()以確保執行順序
    }
});

$("#saveEditReturnBtn").click(function() {
    if (editReturnFormValidator.validate()) {
        saveEditReturn();
        editReturnWindow.close();
        myAlert('Return','Successfully updated!');        
        // getAllReturn(); // 此方法移到saveEditReturn()以確保執行順序
    }
});

function openEditReturnWindow(){
    populateCustomerDropDownList(editReturnName,editReturnCustomerId.value());
    editReturnName.value(editReturnCustomerId.value());
    editReturnWindow.open();
}

var record = 0;
var returnDataSource = {
    data: [],
    schema: {
        model: { id: "id", categoryId: "categoryId", customerId: "customerId" }
    },  
    batch: true,
    pageSize: 5,
    autoSync: true
}
var returnGrid = $("#returnGrid").kendoGrid({
    columns: [
        {
            title: "No.",
            template: "#= ++record #",
            width: 60
        }, {
            field: "date",
            title: "Date"
        }, {
            field: "name",
            title: "Name/Company"
        }, {
            field: "category",
            title: "Product Category"
        },{
            field: "weight",
            title: "Gas Weight(KG)"
        },{
            field: "quantity",
            title: "Cylinders Qty"
        },{
            field: "remark",
            title: "Remark"
        },
        { command: [{
            name: "Edit",
            click: function(e) {
                e.preventDefault();// prevent page scroll position change
                var tr = $(e.target).closest("tr"); // get the current table row (tr)
                var data = this.dataItem(tr);
                editReturnId.value(data.id);
                editReturnDate.value(data.date);
                editReturnCustomerId.value(data.customerId);
                editReturnCategoryId.value(data.categoryId);
                editReturnCategory.value(data.categoryId);
                editReturnWeight.value(data.weight);
                editReturnQuantity.value(data.quantity);
                editReturnRemark.value(data.remark); 
                openEditReturnWindow();
            }
          }]
       }
    ],
    dataSource: returnDataSource,
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
            { name: "id", operator: "equal" },
            { name: "date", operator: "contains" },
            { name: "name", operator: "contains" },
            { name: "category", operator: "contains" },
            { name: "weight", operator: "equal" },
            { name: "quantity", operator: "equal" },
            { name: "totalWeight", operator: "equal" },
            { name: "remark", operator: "contains" }
        ]
    },
    dataBinding: function() {
        record = (this.dataSource.page() -1) * this.dataSource.pageSize();
    }
}).data("kendoGrid");


function saveNewReturn() {
    var dbConn = new mssql.ConnectionPool(sqlConfig);
    dbConn.connect().then(function () {
        var request = new mssql.Request(dbConn);
        var table = 'gas';
        var date = kendo.toString(newReturnDate.value(), 'MM/dd/yyyy');
        var customerId = newReturnName.value();
        var categoryId = newReturnCategory.value();
        var category = newReturnCategory.text();
        var weight = newReturnWeight.value();
        var quantity = newReturnQuantity.value();
        var remark = newReturnRemark.value();
        var sql = `insert into ${table} values('${date}',${customerId},${categoryId},'${category}',${weight},${quantity},2,'${remark}',GETDATE(),NULL)`
        if(newReturnCategory2.value()!="" && newReturnWeight2.value()!="" && newReturnQuantity2.value()!="")
        {
            sql += `insert into ${table} values('${date}',${customerId},${newReturnCategory2.value()},'${newReturnCategory2.text()}',${newReturnWeight2.value()},${newReturnQuantity2.value()},2,'${newReturnRemark2.value()}',GETDATE(),NULL) `
        }
        if(newReturnCategory3.value()!="" && newReturnWeight3.value()!="" && newReturnQuantity3.value()!="")
        {
            sql += `insert into ${table} values('${date}',${customerId},${newReturnCategory3.value()},'${newReturnCategory3.text()}',${newReturnWeight3.value()},${newReturnQuantity3.value()},2,'${newReturnRemark3.value()}',GETDATE(),NULL) `
        }
        if(newReturnCategory4.value()!="" && newReturnWeight4.value()!="" && newReturnQuantity4.value()!="")
        {
            sql += `insert into ${table} values('${date}',${customerId},${newReturnCategory4.value()},'${newReturnCategory4.text()}',${newReturnWeight4.value()},${newReturnQuantity4.value()},2,'${newReturnRemark4.value()}',GETDATE(),NULL) `
        }
        if(newReturnCategory5.value()!="" && newReturnWeight5.value()!="" && newReturnQuantity5.value()!="")
        {
            sql += `insert into ${table} values('${date}',${customerId},${newReturnCategory5.value()},'${newReturnCategory5.text()}',${newReturnWeight5.value()},${newReturnQuantity5.value()},2,'${newReturnRemark5.value()}',GETDATE(),NULL) `
        }
        if(newReturnCategory6.value()!="" && newReturnWeight6.value()!="" && newReturnQuantity6.value()!="")
        {
            sql += `insert into ${table} values('${date}',${customerId},${newReturnCategory6.value()},'${newReturnCategory6.text()}',${newReturnWeight6.value()},${newReturnQuantity6.value()},2,'${newReturnRemark6.value()}',GETDATE(),NULL) `
        }
        request.query(sql).then(function (recordSet) {
            console.log('insert success')
            getAllReturn(); //在此呼叫以確保執行順序
            dbConn.close();
        }).catch(function (err) {
            console.log(err);
            dbConn.close();
        });
    }).catch(function (err) {
        console.log(err);
    });
}

function saveEditReturn(){
    var dbConn = new mssql.ConnectionPool(sqlConfig);
    dbConn.connect().then(function () {
        var request = new mssql.Request(dbConn);
        var table = 'gas';
        var id = editReturnId.value();
        var date = kendo.toString(editReturnDate.value(), 'MM/dd/yyyy');
        var customerId = editReturnName.value();
        var categoryId = editReturnCategory.value();
        var category = editReturnCategory.text();
        var weight = editReturnWeight.value();
        var quantity = editReturnQuantity.value();
        var remark = editReturnRemark.value();
        var sql = `update ${table} set date='${date}',customerId=${customerId},categoryId=${categoryId},category='${category}',weight=${weight},quantity=${quantity},type=2,remark='${remark}',modifyDate=GETDATE() where id=${id}`
        request.query(sql).then(function (recordSet) {
            console.log('update success')
            getAllReturn(); //在此呼叫以確保執行順序
            dbConn.close();
        }).catch(function (err) {
            console.log(err);
            dbConn.close();
        });
    }).catch(function (err) {
        console.log(err);
    });
}

function getAllReturn(){
    var dbConn = new mssql.ConnectionPool(sqlConfig);
    dbConn.connect().then(function () {
        var request = new mssql.Request(dbConn);
        var table1 = 'customer'
        var table2 = 'gas'
        var sql = `select g.id, CONVERT(VARCHAR(20),g.date,101) as date, g.customerId, c.name as name, g.categoryId, g.category, g.weight, g.quantity, g.remark from ${table1} as c inner join ${table2} as g on c.id = g.customerId where g.type = 2`
        request.query(sql).then(function (recordSet) {
            console.log('query success');
            
            // reset datagrid
            returnGrid.dataSource.data([]);
            returnGrid.setDataSource([]);
            var returnDataSource = {
                data: recordSet.recordset,
                schema: {
                    model: { categoryId: "categoryId", customerId: "customerId" }
                },  
                batch: true,
                pageSize: 5,
                autoSync: true
            }
            returnGrid.setDataSource(returnDataSource);
            returnGrid.refresh();
            dbConn.close();
        }).catch(function (err) {
            console.log(err);
            dbConn.close();
        });
    }).catch(function (err) {
        console.log(err);
    });
}

function populateCustomerDropDownList(dropDownList, selectedValue){
    var dbConn = new mssql.ConnectionPool(sqlConfig);
    dbConn.connect().then(function () {
        var request = new mssql.Request(dbConn);
        var table = 'customer'
        var sql = `select id,name from ${table}`
        dropDownList.setDataSource([]);
        dropDownList.dataSource.add({
            "text": "", 
            "value": ""});
        request.query(sql).then(function (recordSet) {
          for(const record of recordSet.recordset){
            dropDownList.dataSource.add({
                "text": record.name,
                "value": record.id});
          }
            dropDownList.value(selectedValue);
            dbConn.close();
        }).catch(function (err) {
            console.log(err);
            dbConn.close();
        });
    }).catch(function (err) {
        console.log(err);
    });
}

function changeSelectedValue(dropDownList){
    dropDownList.value(editReturnCustomerId.value());
}