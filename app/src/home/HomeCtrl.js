'use strict';
define([ 'AngWebApp', 'serviceConfig' ], function(AngWebApp, serviceConfig) {

	angular.module('AngWebApp')
		.controller('HomeCtrl', [ '$scope', '$log', 'appService', function($scope, $log, appService) {

			$scope.homePageText = 'This is your homepage';



			$scope.preInitialize = function() {
				$log.debug(" $scope.preInitialize : serviceConfig baseAPIPath : ", serviceConfig.BASE_API_PATH);
				baseHomeServiceCall();
			}

			function baseHomeServiceCall() {
				$log.debug(serviceConfig.BASE_API_PATH + '' + serviceConfig.HOME_API.NAME + '' + serviceConfig.HOME_API.PATH.homeInitial, ' ');

				appService.GETMethod(serviceConfig.BASE_API_PATH + '' + serviceConfig.HOME_API.NAME + '' + serviceConfig.HOME_API.PATH.homeInitial).then(function(responseData) {

					$log.debug(serviceConfig.BASE_API_PATH + '' + serviceConfig.HOME_API.NAME + '' + serviceConfig.HOME_API.PATH.homeInitial, ' ', responseData);

				});
			}

		} ]);
});