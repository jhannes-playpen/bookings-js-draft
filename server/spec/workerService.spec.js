var expect = require('expect.js');

var Sequelize = require('sequelize');
var sequelize = new Sequelize('bookings', 'application', 'secret',  {
  dialect: 'postgres', log: true
});


describe('workerService', function() {
  var workerService;

  beforeEach(function(done) {
      workerService = require('../workerService')(sequelize);
      sequelize.sync({ force: true }).success(function() {
        done();
      });
  });


  it('includes saved workers', function(done) {
    var worker = {displayName: 'Johannes', designation: 'CTO'};
    var req = {body:worker};
    var res = { 
      send: function() {
        var req;
        var res = { 
          send: function(workers) {
            expect(workers).to.eql([worker]);
            done();
          }
        };
        workerService.list(req, res)
      }
    };
    workerService.create(req, res);
  });
});
