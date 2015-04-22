(function () {
  'use strict';
  /**
  * @ngdoc function
  * @name eveTravelHelperApp.controller:MainCtrl
  * @description
  * # MainCtrl
  * Controller of the eveTravelHelperApp
  */
  angular.module('eveTravelHelperApp')
  .controller('MainCtrl', ['$scope', '$http', '$log', 'ETHConfig', function ($scope, $http, $log, ETHConfig) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    // TODO: implement a resource to handle this
    $http.get(ETHConfig.API_END_POINT + '/systems').success(function(data) {
      $scope.systems = data.systems;
    });

    // TODO: modularise pagination
    $scope.itemsPerPage = 20;
    $scope.maxSize = 10;
    $scope.totalItems = 8030;

    $scope.pageChanged = function() {
      $log.log('Page changed to: ' + $scope.currentPage);
      $http.get(ETHConfig.API_END_POINT + '/systems/page/' + $scope.currentPage + '?per_page=' + $scope.itemsPerPage).success(function(data) {
        $scope.systems = data.systems;
      });
    };
  }]);
}());
