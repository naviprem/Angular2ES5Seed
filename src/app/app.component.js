/**
 * Created by premkrishna on 5/21/16.
 */


var ng = {
    core : require("@angular/core")
};

var HeaderComponent = require('../header/header.component.js');
var FooterComponent = require('../footer/footer.component.js');
var ListComponent = require('../list/list.component.js');

    var AppComponent =
    ng.core.Component({
        selector: 'my-app',
        //styles : [require('./app.component.css')],
        template: require('./app.component.html'),
        directives : [HeaderComponent, FooterComponent, ListComponent]
    })
        .Class({
            constructor: function() {}
        });

module.exports = AppComponent;