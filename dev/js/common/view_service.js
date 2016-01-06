define(['angularAMD', 'utilities', 'socket.io'], function(angularAMD, UTILITIES, io) {
	'use strict';
	angularAMD.controller('navMenuController', ['$scope', '$state', function($scope, $state) {

		$scope.isTabActive = function(tabName) {
			// Check if there is sub-states
			var stateName = $state.current.name,
				subStatePos = stateName.indexOf('.');

			if (subStatePos > -1) {
				stateName = stateName.substring(0, subStatePos);
			}

			if (tabName === stateName) {
				return 'active';
			}
		};

		$scope.switchRootMenu = function(tabName){
			var stateName = $state.current.name,
				subStatePos = stateName.indexOf('.');

			if (subStatePos > -1) {
				stateName = stateName.substring(0, subStatePos);
			}

			if(stateName !== tabName){
				$state.transitionTo(tabName);
			}
		}

		console.log($scope.pageAuth);

	}]);

	angularAMD.controller('headerController', ['$scope', '$state', '$http', 'CONSTANT', function($scope, $state, $http, CONSTANT) {

	}]);

	angularAMD.directive('navMenu', function() {
		return {
			restrict: 'A',
			controller: 'navMenuController',
			templateUrl: 'views/common/nav.html'
		};
	});

	angularAMD.directive('headerView', function() {
		return {
			restrict: 'A',
			controller: 'headerController',
			templateUrl: 'views/common/header.html'
		};
	});

});