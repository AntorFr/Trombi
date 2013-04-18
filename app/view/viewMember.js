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
                '<p><div class="headshot" style="background-image:url(resources/images/headshots/{id}.jpeg);"></div></p>',
                '<p><h4><p><div class="name">{nom} {prenom}</div></h4></p>',
				'<p><h4><p><div class="name">{grade}</div></h4></p>',
                '<h3><div class="title"> Coordonées<br/></div></h3>',
                '<h4><div class="title"><span><A>téléphone mobile : </A></span>{phone}<br/></div></h4>',
				'<h4><div class="title"><span><A>téléphone bureau:</A>{office}</h4>',
				'<h4><div class="title"><span><A>mail: </A>{mail}</span></div></h4>',
				
                '</div>',
        ].join('')
    }
});
