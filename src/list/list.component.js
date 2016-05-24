/**
 * Created by premkrishna on 5/21/16.
 */


var ng = {
    core : require("@angular/core"),
    router : require("@angular/router-deprecated")
};

var StateListService = require("../services/state-list.service");
var DetailsComponent = require('../details/details.component');

    var ListComponent =
        ng.core.Class({
            constructor: [StateListService, function(stateListService) {
                this.stateListService = stateListService;
                this.onSelectionChange = new ng.core.EventEmitter();
            }],
            ngOnInit: function() {
                this.getItems();
            },
            getItems: function() {
                var that = this;
                this.stateListService.getStatesSlowly()
                    .then(function(states) {
                        that.items = states;
                    })
                    .catch(function(err) {
                        console.error("error", err);

                    });
            },
            onSelect: function(item) {
                this.selectedItem = item;
                this.onSelectionChange.emit(item);
            }
        });

ListComponent.annotations = [
    new ng.core.Component({
        selector: 'my-list',
        styles : [require('./list.component.css')],
        template : require('./list.component.html'),
        outputs : ['onSelectionChange'],
        directives : [ng.router.ROUTER_DIRECTIVES],
        providers : [StateListService, ng.router.ROUTER_PROVIDERS]
    }),
    new ng.router.RouteConfig([
        {
            path: './details',
            name: 'Details',
            component: DetailsComponent
        }
    ])
]

module.exports = ListComponent;