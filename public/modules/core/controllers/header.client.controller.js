'use strict';

angular.module('core').controller('HeaderController', ['$scope', 'Menus',
	function($scope, Menus) {
		$scope.menu = Menus.getMenu('topbar');
        var $body = angular.element(document.body);

		$scope.toggleCanvas = function() {
            if($body.hasClass('on-canvas')){
                $body.removeClass('on-canvas');
            }else{
                $body.addClass('on-canvas');
            }
		};

        $scope.toggleCollapsedMin = function(){
            if($body.hasClass('nav-collapsed-min')){
                $body.removeClass('nav-collapsed-min');
            }else{
                $body.addClass('nav-collapsed-min');
            }
        }

		// Collapsing the menu after navigation
		$scope.$on('$stateChangeSuccess', function() {
			$scope.isCollapsed = false;
		});
	}
]);