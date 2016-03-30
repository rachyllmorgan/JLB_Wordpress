angular.module('app', ['ngAnimate'])

.controller('ExampleController', ['$scope', function($scope) {
	console.log("Something is here");
  $scope.items = ['settings', 'home', 'other'];
  $scope.selection = $scope.items[0];
}]);