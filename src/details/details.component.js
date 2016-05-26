/**
 * Created by premkrishna on 5/21/16.
 */

var StateListService = require("../services/state-list.service");

var ng = {
    core : require("@angular/core"),
    router : require("@angular/router-deprecated")
};

var DetailsComponent =
        ng.core.Component({
            selector: 'my-item-details',
            styles : [require('./details.component.css')],
            template: require('./details.component.html'),
            providers : [StateListService]
        })
            .Class({
            constructor: [ng.router.RouteParams, StateListService,
                function(routeParams, stateListService) {
                    this.stateListService = stateListService;
                    this.routeParams = routeParams;
            }],
                ngOnInit: function() {
                    var that = this;
                    var id = this.routeParams.get('itemId');
                    this.stateListService.getState(id)
                        .then(function(state){
                            that.item = state;
                        });
                }

        });


module.exports = DetailsComponent;