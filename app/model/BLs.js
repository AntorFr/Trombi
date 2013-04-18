Ext.define('Trombi.model.BLs', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
        {name: 'id',  type: 'auto'},
		{name: 'name',  type: 'string', defaultValue: "Nom"}
        ],
    idProperty: 'id'
    }
});