// server.js
// where your node app starts

// init project
var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Show the homepage
// http://expressjs.com/en/starter/static-files.html
app.use(express.static('views'));

// Handle requests from IFTTT
app.post("/", function (request, response) {
  console.log("Request received from IFTTT");
  console.log("Data: " + JSON.stringify(request.body));
  console.log("Calling Habitica API...");
  addHabiticaToDo(request.body.title);
  console.log("Done triggering.");
  response.end();  
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

// Loops through each event and where it finds a value for it in .env it will make a request to IFTTT using it
function addHabiticaToDo(title){
  // Make a request to baseURL + triggerEvent + withKey + iftttId, which is the complete IFTTT Maker Request URL
   request("https://habitica.com/api/v3/tasks/user", function (error, response, body) {
     if (!error && response.statusCode == 200) {
       console.log(body); // Show the response from IFTTT
     }
   });
}