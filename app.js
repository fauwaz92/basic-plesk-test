var express = require("express"),
    app     = express();

app.set("view engine", "ejs");

app.get("/" ,function(req, res){
	res.render("landing")
;})
app.get("/about", function(req, res){
	res.render("about")
;})

app.listen(3006, () =>{
	console.log("Server Started");
});