Ext.define('Trombi.store.Membres', {
    extend: 'Ext.data.Store',
    requires:['Trombi.model.Membres'],
    config: {
        model: 'Trombi.model.Membres',
        autoLoad: true,
	    storeId: 'Membres',
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
        filters: [{
            property: 'BL'
        }],
		grouper: {
			groupFn: function(record) {
                var grade = record.get('grade');
				return '<div class="head' + grade + '">' + grade + '</div>';
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