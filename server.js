// server.js
// Where your node app starts

// Init project
var express = require('express');
var app = express();

// Enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));

// https://expressjs.com/en/starter/static-files
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get("/api/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// Hello World!
app.get("/api/hello", function (req, res) {
  res.json({hello: 'I\'m up and running!'});
});

// Endpoints
app.get("/api/endpoints", function (req, res) {
  res.json({ main_page: "GET, https://json-rest-get-api.glitch.me",
             api: "GET, https://json-rest-get-api.glitch.me/api",
             hello: "GET, https://json-rest-get-api.glitch.me/api/hello",
             endpoints: "GET, https://json-rest-get-api.glitch.me/api/endpoints",
             letter: "GET, https://json-rest-get-api.glitch.me/api/letter"
           });
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Your first endpoint
app.get('/api/letter', function (req, res) {
  var replies = [
    "a", "b",
    "c", "d",
    "e", "f",
    "g", "h",
    "i", "j",
    "k", "l",
    "m", "n",
    "o", "p",
    "q", "r",
    "s", "t",
    "u", "v",
    "w", "x",
    "y", "z"
  ];
  
  var result = Math.floor((Math.random() * replies.length));
  
  res.json({
    letter: replies[result]
  });
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Listen for requests
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
