'use strict';
define(['AngWebApp'], function(AngWebApp) {
	
	angular.module('AngWebApp')
	.controller('ContactCtrl', ['$scope', function($scope) {
		$scope.text = 'This is your contact page';
	}]);
});
