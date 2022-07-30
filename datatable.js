$(document).ready(function() {
    editor = new $.fn.dataTable.Editor( {
        ajax: "../php/staff.php",
        table: "#customerTable",
        fields: [ {
                label: "Name:",
                name: "name"
            }, {
                label: "Address:",
                name: "address"
            }, {
                label: "Contact Number:",
                name: "contact_number"
            }, {
                label: "Remark:",
                name: "remark"
            }
        ]
    } );
 
    var table = $('#example').DataTable( {
        lengthChange: false,
        ajax: "../php/staff.php",
        columns: [
            { data: null, render: function ( data, type, row ) {
                // Combine the first and last names into a single table field
                return data.first_name+' '+data.last_name;
            } },
            { data: "name" },
            { data: "address" },
            { data: "contact_number" },
            { data: "remark" }
            // { data: "salary", render: $.fn.dataTable.render.number( ',', '.', 0, '$' ) }
        ],
        select: true
    } );
 
    // Display the buttons
    new $.fn.dataTable.Buttons( table, [
        { extend: "edit",   editor: editor },
        { extend: "remove", editor: editor }
    ] );
 
    table.buttons().container()
        .appendTo( $('.col-md-6:eq(0)', table.table().container() ) );
} );