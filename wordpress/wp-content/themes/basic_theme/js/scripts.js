angular.module('app', ['ngRoute'])
.config(function($routeProvider, $locationProvider) {

	// $locationProvider.html5Mode(true);

	$routeProvider
	.when('/', {
		templateUrl: myLocalized.partials + 'main.html',
		controller: 'Main'
	})

	.when('/posts', {
		templateUrl: myLocalized.partials + 'posts.html',
		controller: 'Post'
	})

	.when('/posts/:ID', {
		templateUrl: myLocalized.partials + 'posts.html',
		controller: 'Post'
	});
})

.controller('Main', function($scope, $http, $routeParams) {
	$http.get('wp-json/wp/v2/posts/').success(function(res){
		$scope.posts = res;
		console.log("posts", $scope.posts);
		console.log("post anything", $scope.posts[0].title);
	});
})

.controller('Post', function($scope, $http, $routeParams) {

	$http.get('wp-json/wp/v2/posts/' + $routeParams.ID).success(function(data){
		console.log(data); //still getting undefined
		$scope.post = data;
		console.log("post", $scope.post);
	});
});