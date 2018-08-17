var burger = require("../models/burger");
var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
    console.log("In The Index!");
    res.render("index");
})
router.post("/api/burger", function(res, req) {
    console.log("Made a post request with value " + req.body);
});
// router.put();

module.exports = router;