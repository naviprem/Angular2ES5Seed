/**
 * Created by premkrishna on 5/21/16.
 */

var ng = {
    platformBrowserDynamic : require("@angular/platform-browser-dynamic"),
    router : require("@angular/router-deprecated")
};

var AppComponent = require('./app/app.component.js');
var HeaderComponent = require('./header/header.component.js');

document.addEventListener('DOMContentLoaded', function() {
    ng.platformBrowserDynamic.bootstrap(AppComponent, [ng.router.ROUTER_PROVIDERS]);
});