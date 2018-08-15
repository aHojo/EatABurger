var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 3000;

var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
var routeCont = require("./routes/burger_controller");

app.use("/", routeCont);


app.listen(PORT, function () {
    console.log("LISTENING on port " + PORT);
});