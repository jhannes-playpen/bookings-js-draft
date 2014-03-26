var express = require('express');
var app = express();

app.use(express.static(__dirname + '/../public'));

var workers = [
  { displayName: 'Lasantha', designation: 'BA' },
  { displayName: 'Sankalpa', designation: 'SSE' }
];

app.get('/api/workers', function(req, res) {
  res.send(workers);
});


var port = process.env.PORT || 3000;
app.listen(port);
console.log("started on " + port);
