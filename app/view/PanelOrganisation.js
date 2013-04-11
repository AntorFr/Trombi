var views = Ext.create("Trombi.store.List");
console.log(views.getCount());
if (views.getCount()>0) {
    views.data.each(function(view) {
        console.log(view.get('name'));
    });
}


Ext.define('Trombi.view.PanelOrganisation', {
	extend: 'Ext.Panel',
	xtype: 'PanelOrganisation',
	requires: [
                'Ext.dataview.List',
                'Trombi.store.BLStore'
               ],
	config: {
		iconCls : 'team',
        title: 'Orga',
		defaultBackButtonText: 'Retour',
        tabBarPosition: 'bottom',
        items:[
        {
            docked: 'top',
            xtype: 'titlebar',
            title: 'Organigramme'
        },
        {
            title : 'BT :',
            xtype: 'list',
            store: 'List',
            height: '100%',
            itemTpl: '<strong>{name}</strong>',
        }
        ],
        

               
                
	}
});