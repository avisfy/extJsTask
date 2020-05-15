/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('ExtjsLearn.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        first: '',
        second: '',
        operation: '+',
        result: ''
    },

    formulas: {
        isFull: function (get) {
            var first = get('first');
            var second = get('second');
            if (first && second) {
                return false;
            } else {
                return true;
            }
        }
    }
});
