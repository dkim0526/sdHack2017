exports.view = function(req, res) {
    var models = require('../models');

    var data = {data: []};
    // res.render("index", data);
    console.log("THIS IS THE TEST");
    var express = require('express'); // Get the module
	var app = express(); // Create express by calling the prototype in var express
	res.render("download");
}