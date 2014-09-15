angular.module('circleController', [])

	.controller('mainController', ['$scope','$http','circles', function($scope, $http, circles) {
		$scope.formData = {};
		$scope.loading = true;
		circles.get()
			.success(function(data) {
				$scope.todos = data;
				$scope.loading = false;
			});

	
	}]);