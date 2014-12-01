(function(){

	'use strict';
	
	angular
		.module('trainingApp', [])
		.controller('loginCtrl', loginCtrl);
		
		
	loginCtrl.$inject = ['$scope', '$http'];
	
	function loginCtrl($scope, $http){
		
		var local = $scope;
		
		local.submitted = false;
		
		local.creds = {
			email: '',
			password: ''
		};
		
		$scope.login = login;
		
		function login(){
			if(local.loginForm.$valid){
				$http({
					method: 'POST',
					url: 'localhost:41424/api/login',
					data: local.creds
				}).success(function(res){
					console.log(res);
				});
			} else{
				local.submitted = true;
			}
		}
		
	}
	
})();