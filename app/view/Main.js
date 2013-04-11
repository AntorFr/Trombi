Ext.define('Trombi.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Trombi.view.PanelOrganisation',
        'Trombi.view.PanelMyInfos',
        'Trombi.view.PanelRecherche',
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
