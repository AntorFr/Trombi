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
        'Trombi.view.PanelBL'
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
            }
        ]
    }
});
