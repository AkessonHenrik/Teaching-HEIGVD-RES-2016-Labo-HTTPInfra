var Chance = require('chance');
var chance = new Chance();

var express = require('express');
var app = express();

var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('quotes.json', 'utf8'));

/************** EXPRESS **************/
app.get('/', function(req, res) {
  res.send(generateJsonPayload());
});

app.listen(3000, function() {
  console.log('Accepting HTTP requests on port 3000!')
});

function generateJsonPayload() {
  var numberOfObjects = chance.integer({
    min: 1,
    max: 10
  });
  var array = [];
  for(var i = 0; i < numberOfObjects; i++) {
    var object = obj.quotes[Math.abs(chance.integer()) % obj.quotes.length];
    array.push(object);
  }
  return array;
}
