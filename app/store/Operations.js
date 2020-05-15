Ext.define('ExtjsLearn.store.Operations', {
    extend: 'Ext.data.Store',

    alias: 'store.operations',
    storeId: 'operations',
    fields: [
        'symbol'
    ],

    data: [
        {"symbol": "+"},
        {"symbol": "-"},
        {"symbol": "*"},
        {"symbol": "/"}
    ]
});