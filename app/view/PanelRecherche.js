Ext.define('Trombi.view.PanelRecherche', {
	extend: 'Ext.Panel',
	xtype: 'PanelRecherche',
	requires: [
                'Ext.field.Search',
                'Ext.field.Select'
               ],
	config: {
		iconCls : 'search',
        title: 'Rechercher',
        tabBarPosition: 'bottom',
        items:[
           {
               docked: 'top',
               xtype: 'titlebar',
               title: 'Rechercher'
            },
            {
               docked: 'top',
               xtype: 'toolbar',
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
            }
        ],
           
        
           
               
                
	}
});