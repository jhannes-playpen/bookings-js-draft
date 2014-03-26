
var expect = require('expect.js');

describe('workerService', function() {
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
