Ext.define("Trombi.store.List", {
    requires: ['Trombi.model.BLs'],
    extend: 'Ext.data.Store',
    alias: 'store.List',
    config: {
        model: 'Trombi.model.BLs',
        storeId: 'List',
        data: [
            {name: 'BL 1', id: 0},
            {name: 'BL 2', id: '1'}
        ]
    }
});
