/**
 * Created by premkrishna on 5/21/16.
 */


var ng = {
    core : require("@angular/core")
};
    var HeaderComponent =
    ng.core.Component({
        selector: 'my-header',
        styles : [require('./header.component.css')],
        template: require('./header.component.html')
    })
        .Class({
            constructor: function() {}
        });

module.exports = HeaderComponent;