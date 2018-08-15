var connection = require("./connection");

var orm = {
    "selectAll": function () {
        console.log("I'm inside select");
    },
    "insertOne": function () {},
    "updateOne": function () {}
}

module.exports = orm;