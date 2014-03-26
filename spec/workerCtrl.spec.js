
describe('worker controller', function() {
  beforeEach(module('bookingApp'));

  var http, ctrl, scope;

  var worker1 = { displayName: 'Lasantha', designation: 'BA' };
  var worker2 = { displayName: 'Sankalpa', designation: 'SSE' };

  beforeEach(inject(function($rootScope, $controller, $httpBackend) {
    http = $httpBackend;
    scope = $rootScope.$new();

    http.expectGET('/api/workers')
      .respond([worker1, worker2])

    ctrl = $controller('WorkerCtrl', { $scope: scope});
    http.flush();
  }));

  it('loads workers at start', function() {
    expect(scope.workers).to.contain(worker1);
  });

  it('has a template for a new worker', function() {
    expect(scope.newWorker).to.be.ok;
  });

  it('saves worker', function() {
    var worker = { displayName: 'Chamath',  designation: 'ATL' };
    scope.newWorker = worker;

    http.expectPOST('/api/workers', worker)
      .respond(201);
    scope.create();

    http.flush();
    expect(scope.newWorker).to.eql({displayName: '', designation: ''});
  });

  it('deals with errors', function() {
    var worker = { displayName: 'Chamath',  designation: 'ATL' };
    scope.newWorker = worker;

    http.expectPOST('/api/workers').respond(404);
    scope.create();
    http.flush();

    expect(scope.newWorker).to.eql(worker);
  });



});