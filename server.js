var mysql = require("mysql");
var express = require("express");

var connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "Louise",
    password: "Louisemn",
    database: "restaurant"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("It's connected!");
});
