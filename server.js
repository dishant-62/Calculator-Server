
const express = require("express");
const app = express();

const bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({extended:true}));

app.get("/",function(req,res){
    // res.send(__dirname);
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req,res){
   
    // console.log(req.body);
    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);
    var sum = num1 + num2;
    res.send("The sum for the following number is:" + sum);
    
});

app.listen(3000,function(){
    console.log("Server is running on port 3");
});