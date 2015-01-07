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
					method: 'post',
					url: 'https://gltraining.herokuapp.com/api/login',
					data: local.creds,
					headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'}
				}).success(function(res){
					console.log(res);
				}).error(function(data){
					console.log('Error:', data);
				});
			} else{
				local.submitted = true;
			}
		}
		
	}
	
})();