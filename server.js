var express = require('express');
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);
