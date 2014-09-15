angular.module('circleService', [])

	.factory('circles', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/circle');
			}
		}
	}]);