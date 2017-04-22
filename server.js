var mysql = require("mysql");
var express = require("express");
var url = require("url");
var http = require("http");

var app = express();
var PORT = 3000;

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
var server = http.createServer();
server.listen(PORT, function(){
  console.log("Server is listening on: http://localhost:%s" , PORT);
});
