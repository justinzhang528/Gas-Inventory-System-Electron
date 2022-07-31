var editSalesId = $("#editSalesId").kendoTextBox().data('kendoTextBox');
var editSalesDate = $("#editSalesDate").kendoDatePicker().data('kendoDatePicker');
var editSalesName = $("#editSalesName").kendoDropDownList().data('kendoDropDownList');
var editSalesCategory = $("#editSalesCategory").kendoDropDownList().data('kendoDropDownList');
var editSalesWeight = $("#editSalesWeight").kendoDropDownList().data('kendoDropDownList');
var editSalesQuantity = $("#editSalesQuantity").kendoTextBox().data('kendoTextBox');
var editSalesRemark = $("#editSalesRemark").kendoTextArea({
    rows: 10,
    maxLength:200
}).data('kendoTextArea');
var editSalesFormValidator = $("#editSalesForm").kendoValidator().data('kendoValidator');
var editSalesWindow = $("#editSalesWindow").kendoWindow({
    actions: ["Maximize", "Minimize", "Close"],
    draggable: true,
    height: "auto",
    modal: true,
    pinned: false,
    resizable: false,
    title: "Edit Sales",
    width: "500px",
    close: function(e) {
        $('#editSalesForm')[0].reset();
    }
}).data('kendoWindow');
editSalesWindow.center();


$("#salesBtn").click(function(){
    $("#customerInfo").hide();
    $("#salesInfo").show();
    $("#returnInfo").hide();
    $("#historyInfo").hide();
    getAllSales();
});

$("#saveEditSalesBtn").click(function() {
    if (editSalesFormValidator.validate()) {
        saveEditSales();
        editSalesWindow.close();
        myAlert('Customer','Successfully updated!');        
        // getAllSales(); // 此方法移到saveEditSales()以確保執行順序
    }
});

function openEditSalesWindow(){
    editSalesWindow.open();
}

function saveEditSales(){

}

var salesDataSource = {
    data: [
        { id: 1, date: "2017/05/28", name: "GEG", category: "Oxygen(O2)", weight: "20", quantity: "5", totalWeight: "100", remark: "smart!" }
    ],
    schema: {
        model: { id: "id" }
    },  
    batch: true,
    pageSize: 5,
    autoSync: true
}
var salesGrid = $("#salesGrid").kendoGrid({
    columns: [
        {
            field: "id",
            title: "No"
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
            field: "totalWeight",
            title: "Total Gas Weight"
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
                editSalesId.value(data.id);
                editSalesDate.value(data.date);
                editSalesName.value(data.name);
                editSalesCategory.value(data.category);
                editSalesWeight.value(data.weight);
                editSalesQuantity.value(data.quantity);
                editSalesRemark.value(data.remark); 
                openEditSalesWindow();
            }
          }]
       }
    ],
    dataSource: salesDataSource,
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
}).data("kendoGrid");

function getAllSales(){    
}