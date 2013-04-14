Ext.define('Trombi.view.viewMember', {
    extend: 'Ext.Container',
    //extend: 'Ext.navigation.View',
    xtype: 'membre-view',
    config: {
        title: 'Mes infos',
        baseCls: 'x-show-contact',
        //layout: 'vbox',
        data: [{'id':1, 'nom':'Corazza', 'prenom':'Laurent', 'BL':1,'grade':'Associé','phone':'0000'}],
        tpl: [
                '<div class="top">',
                '<div class="headshot" style="background-image:url(resources/images/headshots/{id}.jpeg);"></div>',
                '<div class="name">{nom}<br/>{prenom}</div>',
                '<div class="title">Coordonees</div>',
                '<div><span>Telephone </span>{phone}</div>',
                //'<div><span>Email </span>{mail}</div>',
                '</div>',
        ].join('')
    }
});
