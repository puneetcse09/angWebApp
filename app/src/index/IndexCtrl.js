'use strict';
define(['AngWebApp'], function(AngWebApp) {

	angular.module('AngWebApp')
	.controller('IndexCtrl', ['$scope', 'appService', function($scope, appService) {
		
		$scope.text = 'This is your Index page';
	}]);
	
});
