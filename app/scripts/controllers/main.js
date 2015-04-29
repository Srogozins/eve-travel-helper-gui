(function() {
  'use strict';
  /**
   * @ngdoc function
   * @name eveTravelHelperApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the eveTravelHelperApp
   */
  angular.module('eveTravelHelperApp')
    .controller('MainCtrl', ['$scope', '$http', '$log', 'Systems', function($scope, $http, $log, Systems) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
      $scope.systems = [];
      $scope.listFn = Systems.list;

      $scope.extractFn = function(data) {
        return data.systems;
      };
    }]);
}());
