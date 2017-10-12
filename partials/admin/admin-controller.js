angular.module('sampleApp').controller('AdminController', AdminController);

AdminController.$inject = ['$scope', 'AdminService', '$state'];

function AdminController($scope, AdminService, $state){
	console.log('AdminController called');
	//Global variables
	

	// Variables in $scope 
	$scope.menuItems = AdminService.menuItems;
	$scope.routes = AdminService.routes;
	$scope.pageIndex = $scope.routes.indexOf($state.current.name) || 0;
	
	// Functions in $scope
	$scope.handleNext = HandleNext;
	$scope.saveAsDraft = SaveAsDraft;

	function HandleNext () {
		if (($scope.routes.length - 1) <= $scope.pageIndex) {
			return;
		}
		$scope.pageIndex++;
		$state.go($scope.routes[$scope.pageIndex], {}, { location: true });
	}

	function SaveAsDraft () {
		alert('Work in progress');
	}
}