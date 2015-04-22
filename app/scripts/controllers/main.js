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
  .controller('MainCtrl', ['$scope', '$http', '$log', 'Systems', function ($scope, $http, $log, Systems) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    // TODO: modularise pagination
    $scope.systems = [];
    $scope.currentPage = 1;
    $scope.pageChanged = function() {
      $log.log('Page changed to: ' + $scope.currentPage);
      Systems.list($scope.currentPage)
      .success(function(data) {
        $scope.systems = data.systems;
      });
    };
    $scope.pageChanged();

    $scope.itemsPerPage = 20;
    $scope.maxSize = 10;
    $scope.totalItems = 8030;


  }]);
}());
