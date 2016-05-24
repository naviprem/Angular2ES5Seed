/**
 * Created by premkrishna on 5/22/16.
 */
var ng = {
    core : require("@angular/core")
};

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
            }

        });


module.exports = StateListService;