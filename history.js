$("#historyBtn").click(function(){
    $("#customerInfo").hide();
    $("#salesInfo").hide();
    $("#returnInfo").hide();
    $("#historyInfo").show();
    getAllHistory();
});

var record = 0;
var historyDataSource = {
    data: [
        { no: "1", name: "GEG", address: "Taunggyi", salesQuantity: "5", returnQuantity: "2", totalQuantityInUser: "3", remark: "smart!" }
    ],
    batch: true,
    pageSize: 5,
    autoSync: true
}
var historyGrid = $("#historyGrid").kendoGrid({
    columns: [
        {
            title: "No.",
            template: "#= ++record #",
            width: 60
        }, {
            field: "name",
            title: "Name/Company"
        }, {
            field: "address",
            title: "Address"
        }, {
            field: "category",
            title: "Product Category"
        },{
            field: "totalSalesQuantity",
            title: "Sales Cylinders Qty"
        },{
            field: "totalReturnQuantity",
            title: "Return Cylinders Qty"
        },{
            field: "totalQuantityInUser",
            title: "Total Cylinders Qty in user"
        },{
            field: "remark",
            title: "Remark"
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
    toolbar: ["search"],
    search: {
        fields: [
            { name: "name", operator: "contains" },
            { name: "address", operator: "contains" },
            { name: "category", operator: "contains" },
            { name: "totalSalesQuantity", operator: "equal" },
            { name: "totalReturnQuantity", operator: "equal" },
            { name: "totalQuantityInUser", operator: "equal" },
            { name: "remark", operator: "contains" }
        ]
    },
    dataBinding: function() {
        record = (this.dataSource.page() -1) * this.dataSource.pageSize();
    }
}).data("kendoGrid");

function getAllHistory(){
    var dbConn = new mssql.ConnectionPool(sqlConfig);
    dbConn.connect().then(function () {
        var request = new mssql.Request(dbConn);
        var sql = `select c.name as name, c.address as address, t.category as category, t.totalSalesQuantity, t.totalReturnQuantity, t.totalQuantityInUser, c.remark as remark from
        (select s.customerId, s.categoryId, s.category, s.totalSalesQuantity, ISNULL(r.totalReturnQuantity, 0 ) as totalReturnQuantity, (s.totalSalesQuantity - ISNULL(r.totalReturnQuantity,0)) as totalQuantityInUser from 
            (select customerId, categoryId, category, sum(quantity) as totalSalesQuantity from gas where type=1 group by category, categoryId, customerId) as s left join
            (select customerId, categoryId, category, sum(quantity) as totalReturnQuantity from gas where type=2 group by category, categoryId, customerId) as r 
            on s.customerId = r.customerId and s.categoryId = r.categoryId) as t inner join customer as c on c.id = t.customerId`
        request.query(sql).then(function (recordSet) {
            console.log('query success');

            // reset datagrid
            historyGrid.dataSource.data([]);
            historyGrid.setDataSource([]);
            var historyDataSource = {
                data: recordSet.recordset, 
                batch: true,
                pageSize: 5,
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