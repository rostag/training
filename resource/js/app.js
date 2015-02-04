(function(){

	'use strict';
	
	angular
		.module('trainingApp', [])
		.controller('loginCtrl', loginCtrl);
		
		
	loginCtrl.$inject = ['$scope', '$http', '$q', '$log'];
	
	function loginCtrl($scope, $http, $q, $log){
		
		var local = $scope;
		var deferred = $q.defer();
		var base = 'https://gltraining.herokuapp.com/api/';
		
		local.action = null;
		
		$log.info('Hello user!');
		
		local.submitted = false;
		
		local.creds = {
			email: '',
			password: ''
		};
		
		wakeUp().then(function(data){
			$log.info('Server is ' + (data.started ? '' : 'not ') + 'started');
		}, function(error){
			$log.error(error);
		});
		
		$scope.login = login;
		
		function wakeUp(){
			$log.info('Starting application...');
			$http.get(base+'wakeup')
				.success(function(res){
					$log.info(res);
					deferred.resolve({started: true});
				})
				.error(function(e){
					$log.error(e);
					deferred.reject(e);
				});
			return deferred.promise;
		}
		
		function login(){
			local.creds.password = hex_hmac_md5(local.creds.password, "glwebtraining");
			
			if(local.loginForm.$valid){
				$http({
					method: 'post',
					url: base + 'log' + local.action,
					data: local.creds,
					headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'}
				}).success(function(res){
					$log.info(res);
				}).error(function(data){
					$log.error(data);
				});
			} else{
				local.submitted = true;
			}
		}		
	}
	
})();