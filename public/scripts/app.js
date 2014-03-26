var app = angular.module('bookingApp', []);

app.controller('WorkerCtrl', function($scope, $http) {
  var newWorker = function() {
    $scope.newWorker = { displayName: '', designation: '' };
  };

  var fetchWorkers = function() {
    $http.get('/api/workers').
      success(function(data) {
        $scope.workers = data;
      });
  };

  $scope.create = function() {
    $http.post('/api/workers', $scope.newWorker).
      success(function() {
        newWorker();
        fetchWorkers();
      }).error(function() {
        toastr.error('Failed to save worker');
      });
  };

  fetchWorkers();
  newWorker();
});

