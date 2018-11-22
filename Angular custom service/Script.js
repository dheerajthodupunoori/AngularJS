///<reference path="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"/>
var app = angular
		.module("myModule" , [])
		.controller("myController" , function($scope , StringService) {
			$scope.transformString = function(input) {		
				$scope.output = StringService.processString(input);
		};
		});