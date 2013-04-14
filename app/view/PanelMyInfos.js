Ext.define('Trombi.view.PanelMyInfos', {
    extend: 'Ext.navigation.View',
	xtype: 'PanelMyInfos',
	//requires: ['Trombi.view.PanelOrganisationBL'],
	config: {
		iconCls : 'info',
        title: 'Moi',
        items:[
        {
           xtype:'membre-view'
        }]
        
           
	}
});