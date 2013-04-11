Ext.define('Trombi.view.PanelMyInfos', {
	extend: 'Ext.Panel',
	xtype: 'PanelMyInfos',
	//requires: ['Trombi.view.PanelOrganisationBL'],
	config: {
		iconCls : 'info',
        title: 'Moi',
        items:
           {
           docked: 'top',
           xtype: 'titlebar',
           title: 'Mes infos'
        },
        
        html: [
                       "You've just generated a new Sencha Touch 2 project. What you're looking at right now is the ",
                       "contents of <a target='_blank' href=\"app/view/Main.js\">app/view/Main.js</a> - edit that file ",
                       "and refresh to change what's rendered here."
        ].join("")
               
                
	}
});