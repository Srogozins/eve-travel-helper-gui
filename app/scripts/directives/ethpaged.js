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
        isLoading: '=',
        listFn: '&',
        extractFn: '&',
        extractTotalFn: '&'
      },
      controller: ['$scope', '$attrs', '$log', function($scope, $attrs, $log) {
        $scope.items = [];
        $scope.isLoading = true;
        $scope.currentPage = 1;
        $scope.totalItems = 0;
        $scope.pageChanged = function() {
          $log.log('Page changed to: ' + $scope.currentPage);
          $scope.listFn({page: $scope.currentPage})
          .then(function(result) {
            $scope.items = $scope.extractFn({data: result.data});
            $scope.totalItems = $scope.extractTotalFn({data: result.data});
            $scope.isLoading = false;
          });
        };
        $scope.pageChanged();

      }],
      template: '<pagination ng-model="currentPage" ng-change="pageChanged()" total-items="totalItems"></pagination>',
      restrict: 'E'
    };
  });
