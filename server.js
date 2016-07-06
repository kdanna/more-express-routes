var express = require('express')
var app = express();


var burgers = [
                "Hamburger",
                "Cheese Burger",
                "Dble Cheese Burger"
               ];

var tacos = [
                "Soft Taco",
                "Crunchy Taco",
                "Super Taco"
               ];

// app.get("/", function (req, res) {
//     res.send("Hello World");
// });

// app.get("/burgers", function (req, res) {
//     //send all the burgers     
//     res.send(burgers.join(", "));
// });

// app.get("/tacos", function (req, res) {
//     //send all the tacos           
//     res.send(tacos.join(", "));
// });

//WORKS. Color Picker
app.get("/pick_a_color/:color", function (req, res) {
    var color = req.params.color;        
    res.send("Your color is " + color);
});


//WORKS. tacos
app.get("/tacos/:index", function (req, res) {
    var index = req.params.index;  
    var yourChoice = tacos[index]      
    res.send(yourChoice);
});

//WORKS. burgers
app.get("/burgers/:index", function (req, res) {
    var index = req.params.index;  
    var yourChoice = burgers[index]      
    res.send(yourChoice);
});


var burgers = [
                "Hamburger",
                "Cheese Burger",
                "Dble Cheese Burger"
               ];

var tacos = [
                "Soft Taco",
                "Crunchy Taco",
                "Super Taco"
               ];

//Pick a Number.  search by http://localhost:3000/pickanumber?number=7
app.get("/pickanumber", function (req, res) {
    var number = parseInt(req.query.number);
    var correctNum = 7;
    if (number === correctNum) {
        res.send("Nailed it!");
    }else if (number < correctNum){
        res.send("Too low");
    } else {
        res.send("too high");
    }
});


app.listen(3000, function () {
    console.log("Go to localhost:3000/");
});
