// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

var express = require("express");

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================
app.get("/:operator/:num1/:num2", function (req, res) {
    var operator = req.params.operator;
    var num1 = parseInt(req.params.num1);
    var num2 = parseInt(req.params.num2);

    switch (operator) {
        case "add":
            console.log(num1 + num2);
            var sum = num1 + num2;
            res.send(sum.toString());
            break;
        case "subtract":
            var sub = num1 - num2;
            res.send(sub.toString());
            break;
        case "multiply":
            var mul = num1 * num2;
            res.send(mul.toString());
            break;
        case "divide":
            var div = num1 / num2;
            res.send(div.toFixed(2).toString());
            break;
        default:
            res.send("Operator needs to be either add, substract, multiply, or divide");
            break;
    }
})

// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});
