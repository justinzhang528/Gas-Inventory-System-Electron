var startDate = $("#startDate").kendoDatePicker({
    format: "MM/dd/yyyy"
}).data('kendoDatePicker');
var endDate = $("#endDate").kendoDatePicker({
    format: "MM/dd/yyyy"
}).data('kendoDatePicker');

$("#historyBtn").click(function(){
    $("#customerInfo").hide();
    $("#salesInfo").hide();
    $("#returnInfo").hide();
    $("#historyInfo").show();
    startDate.value(null);
    endDate.value(null);
    getAllHistory('');
});

$("#dateSearchBtn").click(function(){
    if(startDate.value()<=endDate.value() && startDate.value()!=null && endDate.value()!=null){
        var startDateValue = kendo.toString(startDate.value(), 'MM/dd/yyyy');
        var endDateValue = kendo.toString(endDate.value(), 'MM/dd/yyyy');
        var dateString = `and (date between '${startDateValue}' and '${endDateValue}') `;
        getAllHistory(dateString);
    }else{
        myAlert('Search','Date Format Error!');
    }
});

var historyDataSource = {
    data: [],
    batch: true,
    pageSize: 10,
    autoSync: true
}
var historyGrid = $("#historyGrid").kendoGrid({
    columns: [
        {
            title: "No.",
            template: "#= ++record #",
            width: 80,
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
            field: "totalSalesQuantity",
            title: "Sales Cylinders Qty",
            width: 180,
            headerAttributes: {style: "font-size: 14px; font-weight: bold; color:black;"}
        },{
            field: "totalReturnQuantity",
            title: "Return Cylinders Qty",
            width: 180,
            headerAttributes: {style: "font-size: 14px; font-weight: bold; color:black;"}
        },{
            field: "totalQuantityInUser",
            title: "Total Cylinders Qty in user",
            headerAttributes: {style: "font-size: 14px; font-weight: bold; color:black; white-space: normal"}
        },{
            field: "remark",
            title: "Remark",
            headerAttributes: {style: "font-size: 14px; font-weight: bold; color:black;"}
        }
    ],
    dataSource: historyDataSource,
    pageable: {
      pageSizes: true
    },
    sortable: {
        mode: "single",
        allowUnsort: false
    },
    toolbar: ["search", "excel"],
    excel:{
      allPages:true
    },
    search: {
        fields: [
            { name: "name", operator: "equal" },
            { name: "region", operator: "equal" },
            { name: "category", operator: "equal" },
            { name: "weight", operator: "equal" },
            { name: "totalSalesQuantity", operator: "equal" },
            { name: "totalReturnQuantity", operator: "equal" },
            { name: "totalQuantityInUser", operator: "equal" },
            { name: "remark", operator: "equal" }
        ]
    },
    dataBinding: function() {
        record = (this.dataSource.page() -1) * this.dataSource.pageSize();
    },
    resizable:true
}).data("kendoGrid");

function getAllHistory(dateString){
    var dbConn = new mssql.ConnectionPool(sqlConfig);
    dbConn.connect().then(function () {
        var request = new mssql.Request(dbConn);
        var sql = `select c.name as name, c.region as region, t.category as category, t.weight as weight, t.totalSalesQuantity, t.totalReturnQuantity, t.totalQuantityInUser, c.remark as remark from
        (select s.customerId, s.categoryId, s.category, s.weight, s.totalSalesQuantity, ISNULL(r.totalReturnQuantity, 0 ) as totalReturnQuantity, (s.totalSalesQuantity - ISNULL(r.totalReturnQuantity,0)) as totalQuantityInUser from 
            (select customerId, categoryId, category, weight, sum(quantity) as totalSalesQuantity from gas where type=1 ${dateString}group by category, weight, categoryId, customerId) as s left join
            (select customerId, categoryId, category, weight, sum(quantity) as totalReturnQuantity from gas where type=2 ${dateString}group by category, weight, categoryId, customerId) as r 
            on s.customerId = r.customerId and s.categoryId = r.categoryId and s.weight = r.weight) as t inner join customer as c on c.id = t.customerId ORDER BY c.name`
        request.query(sql).then(function (recordSet) {
            console.log('query success');

            // reset datagrid
            historyGrid.dataSource.data([]);
            historyGrid.setDataSource([]);
            var historyDataSource = {
                data: recordSet.recordset, 
                batch: true,
                pageSize: 10,
                autoSync: true
            }
            historyGrid.setDataSource(historyDataSource);
            historyGrid.refresh();
            dbConn.close();
        }).catch(function (err) {
            console.log(err);
            dbConn.close();
        });
    }).catch(function (err) {
        console.log(err);
    });
}