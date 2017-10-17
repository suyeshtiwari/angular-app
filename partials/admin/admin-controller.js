angular.module('AdminControllerModule', []).controller('AdminController', AdminController);

AdminController.$inject = ['$scope', 'AdminService', '$state'];

function AdminController($scope, AdminService, $state){
	// Variables in $scope 
	$scope.menuItems = AdminService.menuItems;
	$scope.routes = AdminService.routes;
	$scope.pageIndex = $scope.routes.indexOf($state.current.name) || 0;
	$scope.showSpaceImg = false;
	
	// Functions in $scope
	$scope.handleNext = HandleNext;
	$scope.saveAsDraft = SaveAsDraft;

	function HandleNext () {
		if (($scope.routes.length - 1) <= $scope.pageIndex) {
			return;
		}
		if ($scope.pageIndex === 1 && !$scope.showSpaceImg ) {
			$scope.showSpaceImg = true;
			return;
		}
		$scope.pageIndex++;
		$state.go($scope.routes[$scope.pageIndex], {}, { location: true });
	}

	function SaveAsDraft () {
		alert('Work in progress');
	}
}
