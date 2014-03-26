var app = angular.module('bookingApp', []);

app.controller('WorkerCtrl', function($scope, $http) {
  var newWorker = function() {
    $scope.newWorker = { displayName: '', designation: '' };
  };
  newWorker();

  $http.get('/api/workers').
    success(function(data) {
      $scope.workers = data;
    });

  $scope.create = function() {
    $http.post('/api/workers', $scope.newWorker).
      success(function() {
        newWorker();
      }).error(function() {
        toastr.error('Failed to save worker');
      });
  };
});

