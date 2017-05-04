// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//Runs Application and Port
var app = express();
var PORT = 3000;

// Serve static content for the app from the "/public" directory in the app folder
app.use(express.static(__dirname + "/public"));

// Body Parser Middleware Nonsense
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json"}));

// Routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Initiate the listener
app.listen(PORT, function() {
	console.log("App listening on PORT: ", PORT);
});