'use strict';
define([ 'AngWebApp', 'serviceConfig' ], function(AngWebApp, serviceConfig) {

	angular.module('AngWebApp')
		.controller('LoginCtrl', [ '$scope', '$log', '$state', 'appService', function($scope, $log, $state, appService) {

			$scope.homePageText = 'This is your Login Page';

			$scope.preInitialize = function() {
				$scope.loginData = {
						"username":"",
						"password":""
				}
				$log.debug(" $scope.preInitialize : serviceConfig baseAPIPath : ", serviceConfig.BASE_API_PATH);
//				baseHomeServiceCall();
			}
			
			$scope.loginSubmit=function() {
				$log.debug(serviceConfig.BASE_API_PATH + '' + serviceConfig.LOGIN_API.NAME + '' + serviceConfig.LOGIN_API.PATH.loginSubmit, ' ',$scope.loginData);

				appService.POSTMethod(serviceConfig.BASE_API_PATH + '' + serviceConfig.LOGIN_API.NAME + '' + serviceConfig.LOGIN_API.PATH.loginSubmit, $scope.loginData).then(function(responseData) {

					$log.debug(serviceConfig.BASE_API_PATH + '' + serviceConfig.LOGIN_API.NAME + '' + serviceConfig.LOGIN_API.PATH.loginSubmit, ' ', responseData);
					
					if(responseData === 'SUCCESS'){
						$state.go('home');
					}

				});
			}

			

		} ]);
});