'use strict';

angular.module('core').controller('AppController',['$scope','Authentication',
    function($scope,Authentication){
        $scope.authentication = Authentication;
        $scope.navCollapsedMin = false;
    }
]);