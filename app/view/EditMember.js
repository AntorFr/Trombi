Ext.define('Trombi.view.EditMember', {
    //extend: 'Ext.Container',
    extend: 'Ext.Panel',
    xtype: 'membre-edit',

    requires: [
        'Ext.form.Panel',
        'Ext.form.FieldSet',
        'Ext.field.Text'
    ],

    config: {
        iconCls:'info',
        title: 'Mes infos',
        layout: 'fit',

        items: [
            {
                xtype: 'formpanel',
                items: [
                    {
                        xtype: 'fieldset',
                        defaults: {
                            labelWidth: '35%'
                        },
                        title: 'Information',
                        items: [
                            {
                                xtype: 'textfield',
                                label: 'Nom',
                                name: 'nom'
                            },
                            {
                                xtype: 'textfield',
                                label: 'Prénom',
                                name: 'prenom'
                            },
                            {
                                xtype: 'textfield',
                                label: 'Coefficient',
                                name: 'grade'
                            }
                        ]
                    },
                    {
                        xtype: 'fieldset',
                        defaults: {
                            labelWidth: '35%'
                        },
                        title: 'Contact Information',
                        items: [
                            {
                                xtype: 'textfield',
                                label: 'Telephone',
                                name: 'telephone'
                            }
                        ]
                    }
                ]
            }
        ],

        record: null
    },
});
