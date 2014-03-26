
var expect = require('expect.js');
var _ = require('underscore');

var Sequelize = require('sequelize');
var sequelize = new Sequelize('bookings', 'application', 'secret',  {
  dialect: 'postgres', log: true
});

var Worker = sequelize.define('Worker', {
  displayName: Sequelize.STRING,
  designation: Sequelize.STRING
});


describe('workerService', function() {
  
  beforeEach(function(done) {
    sequelize.sync({ force: true }).success(function() {
      done();
    })
  });

  it('saves workers in db', function(done) {
    var worker = {displayName: 'JBR', designation: 'CTO'};

    Worker.create(worker).
      success(function() {
        Worker.findAll().success(function(data) {
          var workers = _(data).collect(function(v) { 
            return {
              displayName: v.dataValues.displayName,
              designation: v.dataValues.designation
            };
          });

          expect(workers).to.eql([worker]);
          done();
        });
      });
  });




  var workerService = require('../workerService');

  it('includes saved workers', function(done) {
    var worker = {displayName: 'Johannes', designation: 'CTO'};
    var req = {body:worker};
    var res = { 
      send: function() {
        var req;
        var res = { 
          send: function(workers) {
            expect(workers).to.contain(worker);
            done();
          }
        };
        workerService.list(req, res)
      }
    };
    workerService.create(req, res);
  });
});
