Ext.define('Trombi.view.PanelProjet', {
	extend: 'Ext.List',
	xtype: 'PanelProjet',
	config: {
        title: 'Projet',
        cls: 'x-contacts',
        store: 'Projet',
        height: '100%',
        grouped: true,
        record: null,
        itemTpl: [
            //'<div class="headshot" style="background-image:url(resources/images/headshots/{id}.jpeg);"></div>',
            '{titre}',
			'<span>{Status}</span>'
        ].join('')
	}
});