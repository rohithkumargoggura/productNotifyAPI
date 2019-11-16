var express = require("express");
var bodyParser = require("body-parser");
userroutes = require("./api/user_api.js");
var app = express();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", userroutes);

port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log("listening to port " + port);
});
