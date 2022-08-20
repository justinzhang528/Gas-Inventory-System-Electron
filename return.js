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
    dataSource: categoryDataSource
  }).data('kendoDropDownList');
var newReturnWeight = $("#newReturnWeight").kendoDropDownList({
    dataTextField: "text",
    dataValueField: "value",
    dataSource: weightDataSource
  }).data('kendoDropDownList');
var newReturnQuantity = $("#newReturnQuantity").kendoTextBox().data('kendoTextBox');
var newReturnRemark = $("#newReturnRemark").kendoTextArea().data('kendoTextArea');
var newReturnCategory2 = $("#newReturnCategory2").kendoDropDownList({
    dataTextField: "text",
    dataValueField: "value",
    dataSource: categoryDataSource
  }).data('kendoDropDownList');
var newReturnWeight2 = $("#newReturnWeight2").kendoDropDownList({
    dataTextField: "text",
    dataValueField: "value",
    dataSource: weightDataSource
  }).data('kendoDropDownList');
var newReturnQuantity2 = $("#newReturnQuantity2").kendoTextBox().data('kendoTextBox');
var newReturnRemark2 = $("#newReturnRemark2").kendoTextArea().data('kendoTextArea');
var newReturnCategory3 = $("#newReturnCategory3").kendoDropDownList({
    dataTextField: "text",
    dataValueField: "value",
    dataSource: categoryDataSource
  }).data('kendoDropDownList');
var newReturnWeight3 = $("#newReturnWeight3").kendoDropDownList({
    dataTextField: "text",
    dataValueField: "value",
    dataSource: weightDataSource
  }).data('kendoDropDownList');
var newReturnQuantity3 = $("#newReturnQuantity3").kendoTextBox().data('kendoTextBox');
var newReturnRemark3 = $("#newReturnRemark3").kendoTextArea().data('kendoTextArea');
var newReturnCategory4 = $("#newReturnCategory4").kendoDropDownList({
    dataTextField: "text",
    dataValueField: "value",
    dataSource: categoryDataSource
  }).data('kendoDropDownList');
var newReturnWeight4 = $("#newReturnWeight4").kendoDropDownList({
    dataTextField: "text",
    dataValueField: "value",
    dataSource: weightDataSource
  }).data('kendoDropDownList');
var newReturnQuantity4 = $("#newReturnQuantity4").kendoTextBox().data('kendoTextBox');
var newReturnRemark4 = $("#newReturnRemark4").kendoTextArea().data('kendoTextArea');
var newReturnCategory5 = $("#newReturnCategory5").kendoDropDownList({
    dataTextField: "text",
    dataValueField: "value",
    dataSource: categoryDataSource
  }).data('kendoDropDownList');
var newReturnWeight5 = $("#newReturnWeight5").kendoDropDownList({
    dataTextField: "text",
    dataValueField: "value",
    dataSource: weightDataSource
  }).data('kendoDropDownList');
var newReturnQuantity5 = $("#newReturnQuantity5").kendoTextBox().data('kendoTextBox');
var newReturnRemark5 = $("#newReturnRemark5").kendoTextArea().data('kendoTextArea');
var newReturnCategory6 = $("#newReturnCategory6").kendoDropDownList({
    dataTextField: "text",
    dataValueField: "value",
    dataSource: categoryDataSource
  }).data('kendoDropDownList');
var newReturnWeight6 = $("#newReturnWeight6").kendoDropDownList({
    dataTextField: "text",
    dataValueField: "value",
    dataSource: weightDataSource
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
        // $('#newReturnForm')[0].reset();
        newReturnFormValidator.reset();             
        newReturnWeight.value("-");
        newSalesWeight2.value("-");
        newSalesWeight3.value("-");
        newSalesWeight4.value("-");
        newSalesWeight5.value("-");
        newSalesWeight6.value("-");
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
    dataSource: categoryDataSource
  }).data('kendoDropDownList');
var editReturnWeight = $("#editReturnWeight").kendoDropDownList({
    dataTextField: "text",
    dataValueField: "value",
    dataSource: weightDataSource
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
        // getAllReturn(); // 此方法移到saveEditReturn()以確保執行順序
    }
});

$("#saveEditReturnBtn").click(function() {
    if (editReturnFormValidator.validate()) {
        saveEditReturn();
        editReturnWindow.close();
        // getAllReturn(); // 此方法移到saveEditReturn()以確保執行順序
    }
});

function openEditReturnWindow(){
    populateCustomerDropDownList(editReturnName,editReturnCustomerId.value());
    editReturnName.value(editReturnCustomerId.value());
    editReturnWindow.open();
}

var returnDataSource = {
    data: [],
    schema: {
        model: { id: "id", categoryId: "categoryId", customerId: "customerId" }
    },  
    batch: true,
    pageSize: 10,
    autoSync: true
}
var returnGrid = $("#returnGrid").kendoGrid({
    columns: [
        {
            title: "No.",
            template: "#= ++record #",
            width: 80,
            headerAttributes: {style: "font-size: 14px; font-weight: bold; color:black;"}
        }, {
            field: "returnDate",
            title: "Date",
            headerAttributes: {style: "font-size: 14px; font-weight: bold; color:black;"}
        }, {
            field: "name",
            title: "Name/Company",
            headerAttributes: {style: "font-size: 14px; font-weight: bold; color:black;"}
        }, {
            field: "region",
            title: "Region",
            headerAttributes: {style: "font-size: 14px; font-weight: bold; color:black;"}
        }, {
            field: "category",
            title: "Product Category",
            headerAttributes: {style: "font-size: 14px; font-weight: bold; color:black;"}
        },{
            field: "weight",
            title: "Gas Weight(KG)",
            width: 150,
            headerAttributes: {style: "font-size: 14px; font-weight: bold; color:black;"}
        },{
            field: "quantity",
            title: "Cylinders Qty",
            width: 150,
            headerAttributes: {style: "font-size: 14px; font-weight: bold; color:black;"}
        },{
            field: "remark",
            title: "Remark",
            headerAttributes: {style: "font-size: 14px; font-weight: bold; color:black;"}
        },
        { command: [{
            name: "Edit",
            template: '<button class="k-button k-button-solid-primary k-button-solid k-button-md k-rounded-md" onclick="onEditReturn(this)">Edit</button>'
          },
          {
            name: "Delete",
            template: '<button class="k-button k-button-solid-secondary k-button-solid k-button-md k-rounded-md" onclick="onDeleteReturn(this)">Delete</button>'
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
            { name: "returnDate", operator: "equal" },
            { name: "name", operator: "equal" },
            { name: "region", operator: "equal" },
            { name: "category", operator: "equal" },
            { name: "weight", operator: "equal" },
            { name: "quantity", operator: "equal" },
            { name: "remark", operator: "equal" }
        ]
    },
    dataBinding: function() {
        record = (this.dataSource.page() -1) * this.dataSource.pageSize();
    },
    resizable:true
}).data("kendoGrid");

function onEditReturn(e){
    // e.preventDefault();// prevent page scroll position change
    var tr = $(e).closest("tr"); // get the current table row (tr)
    var data = returnGrid.dataItem(tr);
    editReturnId.value(data.id);
    editReturnDate.value(data.returnDate);
    editReturnCustomerId.value(data.customerId);
    editReturnCategoryId.value(data.categoryId);
    editReturnCategory.value(data.categoryId);
    editReturnWeight.value(data.weight);
    editReturnQuantity.value(data.quantity);
    editReturnRemark.value(data.remark); 
    openEditReturnWindow();
}

function onDeleteReturn(e){
    // e.preventDefault();// prevent page scroll position change
    var tr = $(e).closest("tr"); // get the current table row (tr)
    var data = returnGrid.dataItem(tr);
    openDeleteConfirmWindow(data.id,"Return","Retun",deleteReturn);
}


function saveNewReturn() {var table = 'gas';
    var date = kendo.toString(newReturnDate.value(), 'MM/dd/yyyy');
    date = "#" + date + "#";
    var customerId = newReturnName.value();
    var categoryId = newReturnCategory.value();
    var category = newReturnCategory.text();
    var weight = newReturnWeight.value();
    var quantity = newReturnQuantity.value();
    var remark = newReturnRemark.value();
    var sql = `insert into ${table}(gasDate,customerId,categoryId,category,weight,quantity,type,remark,createDate,modifyDate) values(${date},${customerId},${categoryId},'${category}','${weight}',${quantity},2,'${remark}',Date(),NULL) `
    if(newReturnCategory2.value()!="" && newReturnQuantity2.value()!="")
    {
        sql += `insert into ${table}(gasDate,customerId,categoryId,category,weight,quantity,type,remark,createDate,modifyDate) values(${date},${customerId},${newReturnCategory2.value()},'${newReturnCategory2.text()}','${newReturnWeight2.value()}',${newReturnQuantity2.value()},2,'${newReturnRemark2.value()}',Date(),NULL) `
    }
    if(newReturnCategory3.value()!="" && newReturnQuantity3.value()!="")
    {
        sql += `insert into ${table}(gasDate,customerId,categoryId,category,weight,quantity,type,remark,createDate,modifyDate) values(${date},${customerId},${newReturnCategory3.value()},'${newReturnCategory3.text()}','${newReturnWeight3.value()}',${newReturnQuantity3.value()},2,'${newReturnRemark3.value()}',Date(),NULL) `
    }
    if(newReturnCategory4.value()!="" && newReturnQuantity4.value()!="")
    {
        sql += `insert into ${table}(gasDate,customerId,categoryId,category,weight,quantity,type,remark,createDate,modifyDate) values(${date},${customerId},${newReturnCategory4.value()},'${newReturnCategory4.text()}','${newReturnWeight4.value()}',${newReturnQuantity4.value()},2,'${newReturnRemark4.value()}',Date(),NULL) `
    }
    if(newReturnCategory5.value()!="" && newReturnQuantity5.value()!="")
    {
        sql += `insert into ${table}(gasDate,customerId,categoryId,category,weight,quantity,type,remark,createDate,modifyDate) values(${date},${customerId},${newReturnCategory5.value()},'${newReturnCategory5.text()}','${newReturnWeight5.value()}',${newReturnQuantity5.value()},2,'${newReturnRemark5.value()}',Date(),NULL) `
    }
    if(newReturnCategory6.value()!="" && newReturnQuantity6.value()!="")
    {
        sql += `insert into ${table}(gasDate,customerId,categoryId,category,weight,quantity,type,remark,createDate,modifyDate) values(${date},${customerId},${newReturnCategory6.value()},'${newReturnCategory6.text()}','${newReturnWeight6.value()}',${newReturnQuantity6.value()},2,'${newReturnRemark6.value()}',Date(),NULL) `
    }
    connection
        .execute(sql)
        .then(data => {
            console.log('insert success')
            myAlert('Return','Successfully saved!');      
            getAllReturn(); //在此呼叫以確保執行順序
            $('#newReturnForm')[0].reset();
        })
        .catch(error => {
            console.error(JSON.stringify(error));
            myAlert('Return','DB Connection Error!');
        });
}

function saveEditReturn(){var table = 'gas';
    var id = editReturnId.value();
    var date = kendo.toString(editReturnDate.value(), 'MM/dd/yyyy');
    var customerId = editReturnName.value();
    var categoryId = editReturnCategory.value();
    var category = editReturnCategory.text();
    var weight = editReturnWeight.value();
    var quantity = editReturnQuantity.value();
    var remark = editReturnRemark.value();
    var sql = `update ${table} set gasDate='${date}',customerId=${customerId},categoryId=${categoryId},category='${category}',weight='${weight}',quantity=${quantity},type=2,remark='${remark}',modifyDate=Date() where id=${id}`
    connection
        .execute(sql)
        .then(data => {
            console.log('update success')
            myAlert('Return','Successfully updated!');        
            getAllReturn(); //在此呼叫以確保執行順序
        })
        .catch(error => {
            console.error(JSON.stringify(error));
            myAlert('Return','DB Connection Error!');
        });
}

function getAllReturn(){
    var table1 = 'customer'
    var table2 = 'gas'
    var sql = `select g.id, Format(g.gasDate, "mm/dd/yyyy") as returnDate, g.customerId, c.name as name, c.region as region, g.categoryId, g.category, g.weight, g.quantity, g.remark from ${table1} as c inner join ${table2} as g on c.id = g.customerId where g.type = 2`
    connection
        .query(sql)
        .then(data => {
            console.log('query success');
            
            // reset datagrid
            returnGrid.dataSource.data([]);
            returnGrid.setDataSource([]);
            var returnDataSource = {
                data: data,
                schema: {
                    model: { categoryId: "categoryId", customerId: "customerId" }
                },  
                batch: true,
                pageSize: 10,
                autoSync: true
            }
            returnGrid.setDataSource(returnDataSource);
            returnGrid.refresh();
        })
        .catch(error => {
            console.error(JSON.stringify(error));
            myAlert('Return','DB Connection Error!');
        });
}

function deleteReturn(id){          
    var table = 'gas'
    var sql = `delete from ${table} where id=${id}`
    connection
        .execute(sql)
        .then(data => {
            console.log('delete success');
            myAlert("Return", "Deleted Successfully!");
            getAllReturn(); //在此呼叫以確保執行順序
        })
        .catch(error => {
            console.error(JSON.stringify(error));
            myAlert('Return','DB Connection Error!');
        });
}

function changeSelectedValue(dropDownList){
    dropDownList.value(editReturnCustomerId.value());
}