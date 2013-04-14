var views = Ext.create("Trombi.store.BLs");
var views = Ext.create("Trombi.store.Membres");


Ext.define('Trombi.view.PanelOrganisation', {
	//extend: 'Ext.Panel',
    extend: 'Ext.navigation.View',
    xtype: 'PanelOrganisation',
    id: 'PanelOrganisation',
	requires: [
                'Ext.dataview.List',
                'Trombi.store.BLs'
               ],
	config: {
		iconCls : 'team',
        title: 'Orga',
		defaultBackButtonText: 'Retour',
        tabBarPosition: 'bottom',
        items:[
        {
            xtype: 'PanelBL'
        }
        ],
        

               
                
	}
});