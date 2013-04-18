Ext.define('Trombi.controller.Application', {
    extend: 'Ext.app.Controller',
    config: {
        //store : ['BLs','Membres','Membres2','Projet'],
    
        refs: {
            main: 'Main',
            panelBL: 'PanelBL',
            panelMembres: 'PanelMembres',
            panelOrga : 'PanelOrganisation',
            panelRecherche : 'PanelRecherche',
            listRechercheMembre : 'PanelRecherche [itemId=rechercheMembre]',
            listRechercheProjet : 'PanelRecherche [itemId=rechecheProjet]',
            selectSearchType :   'PanelRecherche [name=SearchBar] [itemId=SelectSearchType]',
            containerSearch : 'PanelRecherche [itemId=containerRecherche]',
            searchField : 'PanelRecherche [name=searchfield]'
        },
        
        control: {
           panelBL: {
                itemtap: 'onBLSelect'
           },
           panelMembres: {
                itemtap: 'onMembreSelect'
           },
           listRechercheMembre:{
                itemtap: 'onMembreSelectRech'
           },
           searchField: {
                //scope: this,
                clearicontap: 'onSearchClearIconTap',
                keyup: 'onSearchKeyUp'
           },
           selectSearchType: {
              change : 'onTypeSearchChange'
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

    onMembreSelect: function(list, index, node, record) {
           
        this.getPanelOrga().push({
           xtype: 'membre-view',
           itemId:'membre-view',
           title: 'Infos',//record.get('nom'),
           //data: record.getData(),
           record: record
        });
    },
    onMembreSelectRech: function(list, index, node, record) {
        console.log("test");
        this.getPanelRecherche().push({
           xtype: 'membre-view',
           itemId:'membre-view',
           title: 'Infos',
           record: record
        });
    },
    onSearchKeyUp: function(field) {
         console.log(field.getValue());
         console.log(this.getSelectSearchType().getValue());
           if (this.getSelectSearchType().getValue() == 1 ) {
            this.onSearchKeyUpProjet(field);
           } else {
            this.onSearchKeyUpMember(field);
           }
    },           
    onSearchKeyUpMember: function(field) {
         
        //get the store and the value of the field
        var value = field.getValue(),
            store = Ext.getStore('Membres2');
        
        //first clear any current filters on thes tore
        store.clearFilter();

        //check if a value is set first, as if it isnt we dont have to do anything
        if (value) {
            //the user could have entered spaces, so we must split them so we can loop through them all
            var searches = value.split(' '),
                regexps = [],
                i;

            //loop them all
            for (i = 0; i < searches.length; i++) {
                //if it is nothing, continue
                if (!searches[i]) continue;

                //if found, create a new regular expression which is case insenstive
                regexps.push(new RegExp(searches[i], 'i'));
            }

            //now filter the store by passing a method
            //the passed method will be called for each record in the store
            store.filter(function(record) {
                var matched = [];

                //loop through each of the regular expressions
                for (i = 0; i < regexps.length; i++) {
                    var search = regexps[i],
                        didMatch = record.get('nom').match(search) || record.get('prenom').match(search);

                    //if it matched the first or last name, push it into the matches array
                    matched.push(didMatch);
                }

                //if nothing was found, return false (dont so in the store)
                if (regexps.length > 1 && matched.indexOf(false) != -1) {
                    return false;
                } else {
                    //else true true (show in the store)
                    return matched[0];
                }
            });
        }
    },
    onSearchKeyUpProjet: function(field) {
         
        //get the store and the value of the field
        var value = field.getValue(),
            store = Ext.getStore('Projet');
        
        //first clear any current filters on thes tore
        store.clearFilter();

        //check if a value is set first, as if it isnt we dont have to do anything
        if (value) {
            //the user could have entered spaces, so we must split them so we can loop through them all
            var searches = value.split(' '),
                regexps = [],
                i;

            //loop them all
            for (i = 0; i < searches.length; i++) {
                //if it is nothing, continue
                if (!searches[i]) continue;

                //if found, create a new regular expression which is case insenstive
                regexps.push(new RegExp(searches[i], 'i'));
            }

            //now filter the store by passing a method
            //the passed method will be called for each record in the store
            store.filter(function(record) {
                var matched = [];

                //loop through each of the regular expressions
                for (i = 0; i < regexps.length; i++) {
                    var search = regexps[i],
                         didMatch = record.get('nom').match(search);// || record.get('client').match(search);

                    //if it matched the first or last name, push it into the matches array
                    matched.push(didMatch);
                }

                //if nothing was found, return false (dont so in the store)
                if (regexps.length > 1 && matched.indexOf(false) != -1) {
                    return false;
                } else {
                    //else true true (show in the store)
                    return matched[0];
                }
            });
        }
    },


    /**
     * Called when the user taps on the clear icon in the search field.
     * It simply removes the filter form the store
     */
    onSearchClearIconTap: function() {
        //call the clearFilter method on the store instance
        Ext.getStore('Membres2').clearFilter();
        Ext.getStore('Projet').clearFilter();
    },
    onTypeSearchChange: function (newValue, oldValue, eOpts){
        this.onSearchClearIconTap();
        //this.getContainerSearch().setActiveItem();
           var type = parseInt(this.getSelectSearchType().getValue());
           this.getContainerSearch().setActiveItem(type);
           
    }

});
