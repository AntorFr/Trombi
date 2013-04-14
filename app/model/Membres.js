Ext.define('Trombi.model.Membres', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
        {name: 'id',  type: 'auto'},
		{name: 'nom',  type: 'string'},
        {name: 'prenom',  type: 'string'},
        {name: 'BL',  type: 'int'},
        {name: 'grade',  type: 'string'}
        ],
        idProperty: 'id',
        associations: { type: 'belongsTo', model: 'BLs', name: 'BL' }
    }
});