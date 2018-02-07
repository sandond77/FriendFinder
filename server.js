var express = require('express');
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 3000;

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

require("./routing/apiRoutes.js")(app);
require("./routing/htmlRoutes.js")(app);
