var orm = require("../config/orm");

var burger = {
    all: function(cb) {
        orm.selectAll(function (result) {
            cb(result);
        });
    },
    // The variables cols and vals are arrays.
    create: function(col, vals, cb) {
        orm.insertOne(col, vals, function(result) {
            console.log('burger ', result);
            cb(result)
        });
    },
    update: function(val, cb) {
        orm.updateOne(val, function (result) {
            cb(result);
        });
    },
    delete: function(val, cb) {
        orm.deleteOne(val, function (result) {
            cb(result);
        });
    }
  };

  // Export the database functions for the controller (catsController.js).
  module.exports = burger;
