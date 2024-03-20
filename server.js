const express = require("express");
const bodyparser = require("body-parser");
const ejs = require("ejs");

const app = express();
const port = 5000;

app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(request, response){
    response.render("index");
});
app.get("/bnb", function(request, response){
    response.render("bnb");
});
app.get("/btc", function(request, response){
    response.render("btc");
});
app.get("/doge", function(request, response){
    response.render("doge");
});
app.get("/eth", function(request, response){
    response.render("eth");
});
app.get("/ltc", function(request, response){
    response.render("ltc");
});
app.get("/trx", function(request, response){
    response.render("trx");
});

app.listen(port, function(){
    console.log(`Server has started on port ${port}`);
});
