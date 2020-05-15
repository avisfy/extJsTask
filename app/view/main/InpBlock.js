Ext.define('ExtjsLearn.view.main.InpBlock', {
    extend: 'Ext.form.FieldContainer',
    xtype: 'inp-block',

    layout: {
        type: 'hbox'
    },
    defaults: {
        pack: 'center'
    },
    padding: '0 0 50 0',
    items: [{
        xtype: 'numberfield',
        allowDecimals: true,
        hideTrigger: true,
        name: 'first',
        emptyText: 'number...',
        allowBlank: false,
        margin: '0 40  0 0',
        width: 90,
        bind: {
            value: '{first}'
        }
    }, {
        xtype: 'combobox',
        displayField: 'symbol',
        store: {
            type: 'operations'
        },
        queryMode: 'local',
        valueField: 'symbol',
        editable: false,
        margin: '0 40  0 0',
        width: 70,
        bind: {
            value: '{operation}'
        }
    }, {
        xtype: 'numberfield',
        allowDecimals: true,
        hideTrigger: true,
        name: 'second',
        emptyText:'number...',
        margin: '0 40  0 0',
        width: 90,
        bind: '{second}'
    }, {
        xtype: 'displayfield',
        value: "=",
        margin: '0 40  0 0'
    }, {
        xtype: 'numberfield',
        allowDecimals: true,
        hideTrigger: true,
        name: 'res',
        disabled: true,
        margin: '0 40  0 0',
        width: 80,
        bind:  '{res}'
    }]
})

