/**
 * Created by premkrishna on 5/21/16.
 */


var ng = {
    core : require("@angular/core")
};

var HeaderComponent = require('../header/header.component.js');
var FooterComponent = require('../footer/footer.component.js');
var ListComponent = require('../list/list.component.js');
var DetailsComponent = require('../details/details.component');

    var AppComponent =
    ng.core.Component({
        selector: 'my-app',
        template: require('./app.component.html'),
        directives : [HeaderComponent, FooterComponent, ListComponent, DetailsComponent]
    })
        .Class({
            constructor: function() {},
            onSelectionChange : function(item) {
                this.selectedItem = item;
            }
        });

module.exports = AppComponent;