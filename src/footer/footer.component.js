/**
 * Created by premkrishna on 5/21/16.
 */


var ng = {
    core : require("@angular/core")
};
    var FooterComponent =
    ng.core.Component({
        selector: 'my-footer',
        styles : [require('./footer.component.css')],
        template: require('./footer.component.html')
    })
        .Class({
            constructor: function() {}
        });

module.exports = FooterComponent;