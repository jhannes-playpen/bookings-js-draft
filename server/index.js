var express = require('express');
var app = express();

var db_url = 'postgres://application:secret@localhost/bookings_dev';
var port = process.env.PORT || 3000;

var Sequelize = require('sequelize');
var sequelize = new Sequelize(db_url);

app.use(express.static(__dirname + '/../public'));
app.use(express.json());

var service = require('./service');
service(app, '/api/workers', require('./workerService')(sequelize));

sequelize.sync().success(function() {
  app.listen(port);
  console.log("started on " + port);
});
