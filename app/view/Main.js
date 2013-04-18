var views = Ext.create("Trombi.store.BLs");
var views = Ext.create("Trombi.store.Membres");
var views = Ext.create("Trombi.store.Membres2");
//var views = Ext.create("Trombi.store.Projet");


Ext.define('Trombi.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'mainview',
    requires: [
        'Ext.TitleBar',
        'Trombi.view.PanelOrganisation',
        'Trombi.view.PanelMyInfos',
        'Trombi.view.PanelRecherche',
        'Trombi.view.PanelOrganisation',
        'Ext.dataview.List',
        'Trombi.view.PanelMembres',
		'Trombi.view.PanelProjet',
        'Trombi.view.PanelBL',
        'Trombi.view.EditMember',
        'Trombi.view.viewMember'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            
            {
                xtype: 'PanelOrganisation'
            },
            {
                xtype: 'PanelRecherche'
            },
            {
               xtype: 'PanelMyInfos'
               //xtype: 'membre-edit'
            }
        ]
    }
});
