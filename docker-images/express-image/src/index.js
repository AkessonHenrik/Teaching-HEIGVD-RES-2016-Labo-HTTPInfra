var Chance = require('chance');
var chance = new Chance();

var express = require('express');
var app = express();

console.log("Bonjour, " + chance.name());

/************** EXPRESS **************/
app.get('/', function(req, res) {
  res.send(generateJsonPayload());
});

app.listen(3000, function() {
  console.log('Accepting HTTP requests on port 3000!')
});

function generateJsonPayload() {
  var numberOfObjects = chance.integer({
    min: 0,
    max: 10
  });
  console.log("Number of objects = " + numberOfObjects);
  var array = [];
  for(var i = 0; i < numberOfObjects; i++) {
    var text = "hehe"; //insert random stuff here
    array.push({'number': i, 'text': text})
    console.log(array[i]);
  }
  return array;
}
