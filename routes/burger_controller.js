var burger = require("../models/burger");
var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
    burger.all(function(data) {
        var burgerObj = {
            burger: data
        }

        console.log(burgerObj);
        res.render("index",burgerObj); 
    });
})

router.post("/api/burger", function(req, res) {
    console.log("Made a post request with value " + req.body);
    burger.create("burger_name", [req.body.burger_name], function(result) {
        res.json({id: result.insertId});
    });
});

router.put("/api/burger/:id", function (req, res) {
    var condition = req.params.id;

    burger.update(condition, function(result) {
        res.json(result);
    });
});

router.delete("/api/burger/:id", function(req, res) {
    var condition = req.params.id
    burger.delete(condition, function(result) {
        res.json(result);
    });
});

module.exports = router;