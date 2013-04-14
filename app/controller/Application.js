Ext.define('Trombi.controller.Application', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            main: 'Main',
            panelBL: 'PanelBL',
            panelMembres: 'PanelMembres',
            panelOrga : 'PanelOrganisation'
        },

        control: {
           panelBL: {
                itemtap: 'onBLSelect'
           },
           panelMembres: {
                itemtap: 'onMembreSelect'
           }
        }
    },

    onBLSelect: function(list, index, node, record) {

        var BLmembers = Ext.getStore('Membres');
           BLmembers.clearFilter();
           BLmembers.filter('BL', record.get('id') );
        
           
        this.getPanelOrga().push({
           xtype: 'PanelMembres',
           itemId:'PanelMembres',
           title: record.get('name')
           //data: record.getData()
        });
    },

});
