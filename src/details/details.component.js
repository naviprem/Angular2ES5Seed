/**
 * Created by premkrishna on 5/21/16.
 */


var ng = {
    core : require("@angular/core")
};
    var DetailsComponent =
    ng.core.Component({
        selector: 'my-item-details',
        styles : [require('./details.component.css')],
        template: require('./details.component.html'),
        inputs : ['item']
    })
        .Class({
            constructor: function() {}
        });

module.exports = DetailsComponent;