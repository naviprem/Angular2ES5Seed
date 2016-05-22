/**
 * Created by premkrishna on 5/21/16.
 */

var ng = {
    platformBrowserDynamic : require("@angular/platform-browser-dynamic")
};

var AppComponent = require('./app/app.component.js');
var HeaderComponent = require('./header/header.component.js');

document.addEventListener('DOMContentLoaded', function() {
    ng.platformBrowserDynamic.bootstrap(AppComponent);
});