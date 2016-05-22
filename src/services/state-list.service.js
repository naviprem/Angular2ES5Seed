/**
 * Created by premkrishna on 5/22/16.
 */
var ng = {
    core : require("@angular/core")
};

var STATES = require("../mocks/state-list.mock");

var StateListService = {
    getStates : function() {
        return STATES;
    }
}

module.exports = StateListService;