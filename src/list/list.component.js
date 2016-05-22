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
        outputs : ['onSelectionChange']
    })
        .Class({
            constructor: function() {
                this.items = StateListService.getStates();
                this.onSelectionChange = new ng.core.EventEmitter();
            },
            onSelect: function(item) {
                this.selectedItem = item;
                this.onSelectionChange.emit(item);
               
            }
        });

module.exports = ListComponent;