(function(){
	'use strict';

	angular
		.module('controller.main', [])
		.controller('mainCtrl', mainCtrl)

	mainCtrl.$inject = ['$scope', '$http'];
	
	function mainCtrl($scope, $http){
		var vm = this;
		
		$http.get('base/base.json')
			.success(function(response){
				vm.base = response;
			})
			.error(function(error){
				console.log(error)
			});
			
		$http.get('base/function.json')
			.success(function(response){
				vm.functions = response;
			})
			.error(function(error){
				console.log(error)
			});	
			
		$http.get('base/patterns.json')
			.success(function(response){
				vm.patterns = response;
			})
			.error(function(error){
				console.log(error)
			});
	}

})();