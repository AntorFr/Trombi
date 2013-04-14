Ext.define('Trombi.view.PanelMembres', {
	extend: 'Ext.List',
	xtype: 'PanelMembres',
	config: {
        title: 'Membres de la BL',
        cls: 'x-contacts',
        store: 'Membres',
        height: '100%',
        grouped: true,
        record: null,
        itemTpl: [
            '<div class="headshot" style="background-image:url(resources/images/headshots/{id}.jpeg);"></div>',
            '{nom} {prenom}',
            '<span>{grade}</span>'
        ].join('')
	}
});