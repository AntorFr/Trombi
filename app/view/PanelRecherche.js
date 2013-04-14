Ext.define('Trombi.view.PanelRecherche', {
	extend: 'Ext.navigation.View',
	xtype: 'PanelRecherche',
	requires: [
                'Ext.field.Search',
                'Ext.field.Select'
               ],
	config: {
		iconCls : 'search',
        title: 'Rechercher',
        tabBarPosition: 'bottom',
        //ui: 'round',
           
        items:[
            {
               docked: 'top',
               xtype: 'toolbar',
               title: 'Rechercher',
               items: [
                       {
                            xtype      : 'searchfield',
                            placeHolder: 'Search',
                            name       : 'searchfield'
                        },
                        {
                            xtype: 'selectfield',
                            name : 'options',
                            docked : 'right',
                            options: [
                                 {text: 'Personne',  value: '1'},
                                 {text: 'Projet', value: '2'}
                                 ]
                       }
                    ]
               },{
                xtype: 'list',
                itemId:'rechercheMembre',
                
                grouped: true,
                cls: 'x-contacts',
                store: 'Membres',
                itemTpl: [
                '<div class="headshot" style="background-image:url(resources/images/headshots/{id}.jpeg);"></div>',
                '{nom} {prenom}',
                ].join(''),
               emptyText: '<div style="margin-top: 20px; text-align: center">No Matching Items</div>',
               
            }
        ],
           
        
           
           
           
	}
});