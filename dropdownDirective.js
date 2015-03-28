'use strict';
angular.module('myApp')
.directive('dropdown', ['$document', function ($document) {
	return {
		restrict: 'A',
		scope: {
			showDropdown: '=',
			watchMe: '='
		},
		link: function ($scope, $element, $attr) {
			$document.bind('click', function (event) {
				var clickWasOutside = $element.find(event.target).length < 1;

				if (clickWasOutside) {
					$scope.showDropdown = false;
					$scope.$apply();
				}
			});

			$scope.$watch('watchMe', function (newVal, oldVal) {
				if (!newVal) $scope.showDropdown = false;
			});
		}
	}
}]);
