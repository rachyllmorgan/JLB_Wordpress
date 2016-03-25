angular.module('app', ['ngRoute'])
.config(function($routeProvider, $locationProvider) {

	// $locationProvider.html5Mode(true);

	$routeProvider
	.when('/', {
		templateUrl: myLocalized.partials + 'main.html',
		controller: 'Main'
	});

		$routeProvider
	.when('/demo', {
		templateUrl: myLocalized.partials + 'demo.html',
		controller: 'Main'
	});
})
.controller('Main', function() {
	console.log('Main file loaded.');
});