Ext.define('Trombi.view.PanelRecherche', {
	extend: 'Ext.navigation.View',
    //extend : 'Ext.Container',
    //extend : 'Ext.Panel',
	xtype: 'PanelRecherche',
	requires: [
                'Ext.field.Search',
                'Ext.field.Select',
                'Ext.navigation.View',
                'Ext.List'
               ],
	config: {
		iconCls : 'search',
        title: 'Rechercher',
        tabBarPosition: 'bottom',
        //navigationBar : {},
        //ui: 'round',
           
        items:[
            {
               docked: 'top',
               xtype: 'toolbar',
               name : 'SearchBar',
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
                            itemId : 'SelectSearchType',
                            docked : 'right',
                            options: [
                                 {text: 'Personne',  value: '0'},
                                 {text: 'Projet', value: '1'}
                                 ]
                       }
                    ]
            },{
            xtype: 'container',
            itemId:'containerRecherche',
            fullscreen : true,
              layout: 'card',
               items:[
                {
                        xtype: 'list',
                        itemId:'rechercheMembre',
                        grouped: true,
                        cls: 'x-contacts',
                        store: 'Membres2',
                        itemTpl: [
                                  '<div class="headshot" style="background-image:url(resources/images/headshots/{id}.jpeg);"></div>',
                                  '{nom} {prenom}',
                        ].join(''),
                        emptyText: '<div style="margin-top: 20px; text-align: center">No Matching Items</div>',
                },{
                        xtype: 'list',
                        itemId:'rechercheProjet',
                        grouped: true,
                        cls: 'x-contacts',
                        store: 'Projet',
                        itemTpl: [
                                  '<div class="headshot" style="background-image:url(resources/images/headshots/{id}.jpeg);"></div>',
                                  '{nom}',
                        ].join(''),
                        emptyText: '<div style="margin-top: 20px; text-align: center">No Matching Items</div>',
            }]
               
        }
           
        ],   
           
	}
});