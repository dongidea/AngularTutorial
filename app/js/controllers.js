'use strict';

/* Controllers */

var myAngularApp = angular.module('myApp', []);
myAngularApp.controller('HelloCtrl', function($scope){
	$scope.getName = function() {
		return $scope.name;
	}
});
