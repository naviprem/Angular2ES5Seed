/**
 * Created by premkrishna on 5/22/16.
 */
var ng = {
    core : require("@angular/core")
};
var _ = require("lodash");

var STATES = require("../mocks/state-list.mock");


var StateListService =
    ng.core.Injectable()
        .Class({
            constructor: function() {
            },
            getStates : function() {
                return Promise.resolve(STATES);
            },
            getStatesSlowly : function() {
                return new Promise(function(resolve, reject) {
                    setTimeout(function(){
                        resolve(STATES);
                    }, 2000)
                });
            },
            getState : function(id) {
                return new Promise(function(resolve, reject) {
                    setTimeout(function(){
                        var state = _.find(STATES, {'abbreviation' : id});
                        console.log(id, state);
                        resolve(state);
                    }, 2000)
                });
            }
        });


module.exports = StateListService;