//importing modules

var express = require("express");
var mongoose = require("mongoose");
var bodyparser = require("body-parser");
var cors = require("cors");

const route = require("./route/routes");

var app = express();

const PORT = 3000;

//app adding middleware - cors & body-parser

app.use(cors());

app.use(bodyparser.json());

app.use("/api", route);

app.get("/", (req, res) => {
  res.send("I am here !!");
});

app.listen(PORT, () => {
  console.log("Server has started at port: " + PORT);
});

//connect to mongodb

mongoose.connect("mongodb://localhost:27017/shoppinglist");

//on connection

mongoose.connection.on("connected", () => {
  console.log(" Mongodb connected at port 27017");
});

//on connection error

mongoose.connection.on("error", (err) => {
  console.log(err);
});
