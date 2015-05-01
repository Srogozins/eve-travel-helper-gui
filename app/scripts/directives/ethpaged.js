'use strict';

/**
 * @ngdoc directive
 * @name eveTravelHelperApp.directive:ethPaged
 * @scope
 * @restrict E
 * @description
 * # ethPaged
 * Wrapper for ui-bootstrap's pagination, encapsulating interaction between
 * services and variables
 */
angular.module('eveTravelHelperApp')
  .directive('ethPaged', function() {
    return {
      scope: {
        items: '=',
        listFn: '&',
        extractFn: '&'
      },
      controller: ['$scope', '$attrs', '$log', function($scope, $attrs, $log) {
        $scope.items = [];
        $scope.currentPage = 1;
        $scope.itemsPerPage = 20;
        $scope.maxSize = 10;
        $scope.totalItems = 8030;
        $scope.pageChanged = function() {
          $log.log('Page changed to: ' + $scope.currentPage);
          $scope.listFn({page: $scope.currentPage})
          .then(function(result) {
            $scope.items = $scope.extractFn({data: result.data});
          });
        };
        $scope.pageChanged();

      }],
      template: '<pagination ng-model="currentPage" ng-change="pageChanged()" max-size="maxSize" total-items="totalItems"></pagination>',
      restrict: 'E'
    };
  });
