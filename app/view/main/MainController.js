/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('ExtjsLearn.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onClicked: function () {
        var vm = this.getViewModel();
        var a = vm.get('first');
        var b = vm.get('second');
        var oper = vm.get('operation');
        debugger
        var result;
        switch (oper) {
            case '+':
                result = a + b;
                break;
            case '-':
                result = a - b;
                break;
            case '*':
                result = a * b;
                break;
            case '/':
                result = a / b;
                break;
        }
        vm.set('res', result);
    }


});
