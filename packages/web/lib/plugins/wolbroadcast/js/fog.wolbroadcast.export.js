(function($) {
    var exportTable = Common.registerTable($('#wolbroadcast-export-table'), null, {
        buttons: [
            'copy',
            {
                extend: 'csv',
                header: false
            },
            'excel',
            'print',
            'colvis'
        ],
        lengthMenu: [
            [10, 25, 50, 100, -1],
            [10, 25, 50, 100, 'All']
        ],
        order: [
            [0, 'asc']
        ],
        columns: [
            {data: 'name'}, // 0
            {data: 'broadcast'} // 1
        ],
        rowId: 'id',
        processing: true,
        serverSide: true,
        ajax: {
            url: '../management/index.php?node='
            + Common.node
            + '&sub=getExportList',
            type: 'post'
        }
    });

    // Enable searching
    if (Common.search && Common.search.length > 0) {
        exportTable.search(Common.search).draw();
    }
})(jQuery);