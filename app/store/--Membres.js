Ext.define('Trombi.store.Membres', {
    requires: ['Trombi.model.BLs'],
    extend: 'Ext.data.Store',
    config: {
        model: 'Trombi.model.BLs',
	    storeId: 'Membres',
	    sorters: [
	    {
		    property: 'name',
		    direction: 'ASC'
	    },
	    {
		    property: 'id',
		    direction: 'ASC'
	    }
	    ],
        autoLoad: true,
	    proxy: {
		    type: 'ajax',
		    url: './datas/BLs.json',
		
		    reader: {
			    type: 'json',
			    rootProperty: 'BLs'
		    }
	    }
    }
}
);