Ext.define('Trombi.model.Projet', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
        {name: 'id',  type: 'auto'},
		{name: 'nom',  type: 'string'},
        {name: 'status',  type: 'string'}         
        ],
        idProperty: 'id',
        //associations: { type: 'belongsTo', model: 'BLs', name: 'BL' }
    }
});