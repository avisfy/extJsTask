/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('ExtjsLearn.view.main.Main', {
    extend: 'Ext.Panel',
    xtype: 'app-main',

    requires: [
        'ExtjsLearn.view.main.InpBlock'
    ],
    controller: 'main',
    viewModel: 'main',

    width: 400,
    height: 230,
    title: 'Calculator',
    bodyPadding: 30,
    layout: {
        type: 'vbox',
        align: 'top',
        width: '100%'
    },
    items: [{
        xtype: 'inp-block'
    }, {
        xtype: 'button',
        text: 'Calculate!',
        name: 'Calc',
        emptyText:'number...',
        width:200,
        bind : {
            disabled: '{isFull}'
        },
        listeners: {
            click: 'onClicked'
        }
    }]

});
