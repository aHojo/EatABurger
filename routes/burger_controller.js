var burger = require("../models/burger");
var express = require("express");
var router = express.Router();

router.get("/index", function(req, res) {
    console.log("In The Index!");
});
// router.post();
// router.put();

module.exports = router;