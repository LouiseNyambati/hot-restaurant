var mysql = require("mysql");
var express = require("express");
var url = require("url");
var http = require("http");
var path = require("path");
var bodyParser = require("body-parser");


var app = express();
var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

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

app.listen(PORT, function(){
  console.log("Server is listening on: http://localhost:%s" , PORT);
});

// function handleRequest(req,res) {

// }

app.get("/api/table", function(req,res){
  connection.query("SELECT * FROM waiting_list", function (err,res){
      if (res == null){
        console.log ("none");
      }

      else{
          for (var i = 0; i < res.length; i++){
            return res.json(res [i]);
        }

      }





  });
})

app.get("/", function (req,res){
    res.sendFile(path.join(__dirname, "index.html"))
  })

  app.get("/reserve", function (req,res){
    res.sendFile(path.join(__dirname, "reserve.html"))
  })

  app.get("/tables", function (req,res){
    res.sendFile(path.join(__dirname, "tables.html"))
  })


  $(".submit").on("click", function() {

   connection.query("INSERT INTO reservations", [{

        name: $("#name").val().trim(),
        phone_number: $("#phone_number").val().trim(),
        email: $("#email").val().trim(),
        unique_id: $("#unique_id").val().trim()
      }], function(err){
        if(err) throw err;
        console.log ("It worked");
      })


  });
