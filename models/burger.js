var orm = require("../config/orm");

var burger = {
    all: function(cb) {
        console.log("in all!");
    },
    // The variables cols and vals are arrays.
    create: function(cols, vals, cb) {
    },
    update: function(objColVals, condition, cb) {

    }
  };

  // Export the database functions for the controller (catsController.js).
  module.exports = burger;