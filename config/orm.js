var connection = require("./connection");

var orm = {
    "selectAll": function (cb) {
        connection.query("SELECT * FROM burgers", function (err, result) {
            if (err) throw err;

            cb(result);
        }) 
    },
    "insertOne": function (col, vals, cb) {
       
        connection.query("INSERT INTO burgers SET ?",{
            burger_name: vals[0]
        }, function (err, result) {
            if (err) throw err;
            console.log('orm ', result);
            cb(result);
        });
    },
    "updateOne": function (val,cb) {
        
        connection.query("UPDATE burgers SET ? WHERE ?",[
            {
                "devoured": 1
            },
            {
                "id": val 
            }
        ], function(result) {
            cb(result);
        });
    },
    "deleteOne": function (val,cb) {
        
        connection.query("DELETE FROM burgers WHERE ?",[
            {
                "id": val 
            }
        ], function(result) {
            cb(result);
        });
    }
}

module.exports = orm;