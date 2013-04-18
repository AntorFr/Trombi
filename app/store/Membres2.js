Ext.define('Trombi.store.Membres2', {
    extend: 'Ext.data.Store',
    requires:['Trombi.model.Membres'],
    config: {
        model: 'Trombi.model.Membres',
        autoLoad: true,
	    storeId: 'Membres2',
	    sorters: [
	    {
		    property: 'nom',
		    direction: 'ASC'
	    },
	    {
		    property: 'id',
		    direction: 'ASC'
	    }
	    ],
       
		grouper: {
			groupFn: function(record) {
               var nom = record.get('nom')[0];
				return nom.toUpperCase();
			}
		},
	    proxy: {
		    type: 'ajax',
		    url: './datas/Membres.json',
		
		    reader: {
			    type: 'json',
			    rootProperty: 'Membres'
		    }
	    }
    }
}
);