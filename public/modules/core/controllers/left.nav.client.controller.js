'use strict';

angular.module('core').controller('LeftNavController', ['$scope', 'Menus',
	function($scope, Authentication, Menus) {
		$scope.isCollapsed = false;
		$scope.menu = Menus.getMenu('topbar');
	}
]);