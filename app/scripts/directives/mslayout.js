'use strict';

angular.module('meanserviceApp')
  .directive('msLayout', function () {
    return {
      restrict: 'E',
      transclude: true,
      templateUrl: 'views/layout.html'
    };
  });
