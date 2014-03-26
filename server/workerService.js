var _ = require('underscore');
var Sequelize = require('sequelize');

var workers = [
  { displayName: 'Lasantha', designation: 'BA' },
  { displayName: 'Sankalpa', designation: 'SSE' }
];



module.exports = function(sequelize) {
  var Worker = sequelize.define('Worker', {
    displayName: Sequelize.STRING,
    designation: Sequelize.STRING
  });

  return {
    list: function(req, res) {
      Worker.findAll().success(function(data) {
          var workers = _(data).collect(function(v) { 
            return {
             displayName: v.dataValues.displayName,
             designation: v.dataValues.designation
            };
          });
        res.send(workers);
      });
    },

    create: function(req, res) {
      var worker = req.body;
      Worker.create(worker).success(function() {
        res.send(201);
      });
    }
  };
};
