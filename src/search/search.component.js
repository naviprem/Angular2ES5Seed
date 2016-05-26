/**
 * Created by premkrishna on 5/21/16.
 */


var ng = {
    core : require("@angular/core"),
    router : require("@angular/router-deprecated")
};
var SearchComponent =
    ng.core.Class({
        constructor: function() {}
    });

SearchComponent.annotations = [
    new ng.core.Component({
        selector: 'my-search',
        styles : [require('./search.component.css')],
        template: require('./search.component.html')
    }),
    new ng.router.RouteConfig([
        { path: '/search', component: SearchComponent, name: 'SearchComponent' },
    ])
]
module.exports = SearchComponent;