'use strict';
define(['AngWebApp'], function(AngWebApp) {
	
	angular.module('AngWebApp')
	.controller('AboutCtrl', ['$scope', function($scope) {
		
		$scope.text = 'This is your About page';
	}]);
});
