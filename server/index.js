var express = require('express');
var app = express();

var Sequelize = require('sequelize');
var sequelize = new Sequelize('bookings', 'application', 'secret',  {
  dialect: 'postgres', log: true
});

app.use(express.static(__dirname + '/../public'));
app.use(express.json());

var service = require('./service');
service(app, '/api/workers', require('./workerService')(sequelize));

var port = process.env.PORT || 3000;
app.listen(port);
console.log("started on " + port);
