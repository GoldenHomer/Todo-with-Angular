var app = angular.module('Todo',[]);
app.controller('TodoCtrl', function($scope){
	// $scope (an object) is the link between this controller and to the view!
	// Also. stick to naming conventions, such as Controllers as Ctrl
	$scope.todos = ['Learn to play a 12 stringer',
					'Go to Japan for 2020 Olympics',
					'Get a good job!'];
});