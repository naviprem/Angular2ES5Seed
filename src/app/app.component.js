/**
 * Created by premkrishna on 5/21/16.
 */


var ng = {
    core : require("@angular/core"),
    router : require("@angular/router-deprecated")
};

var HeaderComponent = require('../header/header.component.js');
var FooterComponent = require('../footer/footer.component.js');
var ListComponent = require('../list/list.component.js');
var DetailsComponent = require('../details/details.component.js');

    var AppComponent =
        ng.core.Class({
            constructor: function() {},
            onSelectionChange : function(item) {
                this.selectedItem = item;
            }
        });

AppComponent.annotations = [
    new ng.core.Component({
        selector: 'my-app',
        template: require('./app.component.html'),
        directives : [HeaderComponent, FooterComponent,
            ng.router.ROUTER_DIRECTIVES]
    }),
    new ng.router.RouteConfig([
        {
            path: '/list',
            name: 'List',
            component: ListComponent,
            useAsDefault: true
        },
        {
            path: '/details/:itemId',
            name: 'Details',
            component: DetailsComponent
        }
    ])
]
module.exports = AppComponent;