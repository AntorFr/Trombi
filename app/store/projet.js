Ext.define('Trombi.store.Projet', {
    extend: 'Ext.data.Store',
    requires:['Trombi.model.Projet'],
    config: {
        model: 'Trombi.model.Projet',
        autoLoad: true,
	    storeId: 'Projet',
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
		    url: './datas/projets.json',
		
		    reader: {
			    type: 'json',
			    rootProperty: 'projet'
		    }
	    }
    }
}
);