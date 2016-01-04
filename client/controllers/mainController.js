var myApp = angular.module('myApp');

myApp.controller('mainController', function($scope) {
	$scope.css = "";
    $scope.$on('updateCSS', function(event, css){
      $scope.css = css;
    })
});