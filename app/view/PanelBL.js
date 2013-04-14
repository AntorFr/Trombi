Ext.define('Trombi.view.PanelBL', {
	extend: 'Ext.List',
	xtype: 'PanelBL',
    id:'PanelBL',
	config: {
        title : 'Organigramme',
        store: 'BLs',
        height: '100%',
        itemTpl: '<strong>{name}</strong>',
	}
});