/**
 * Created by premkrishna on 5/21/16.
 */


var ng = {
    core : require("@angular/core")
};

var StateListService = require("../services/state-list.service");

    var ListComponent =
    ng.core.Component({
        selector: 'my-list',
        styles : [require('./list.component.css')],
        template : require('./list.component.html'),
        outputs : ['onSelectionChange'],
        providers : [StateListService]
    })
        .Class({
            constructor: [StateListService, function(stateListService) {
                this.stateListService = stateListService;
                this.onSelectionChange = new ng.core.EventEmitter();
            }],
            ngOnInit: function() {
                this.getItems();
            },
            getItems: function() {
                var that = this;
                this.stateListService.getStates()
                    .then(function(states) {
                        that.items = states;
                    })
                    .catch(function(err) {
                        console.log("error", err);

                    });
            },
            onSelect: function(item) {
                this.selectedItem = item;
                this.onSelectionChange.emit(item);
            }
        });

module.exports = ListComponent;