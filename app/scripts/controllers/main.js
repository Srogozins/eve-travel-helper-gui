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
      $scope.start = null;
      $scope.destination = null;
      $scope.route = null;

      $scope.extractFn = function(data) {
        return data.systems;
      };
      $scope.extractTotalFn = function(data) {
        return data.total_systems;
      };
      $scope.getRoute = function() {
        $http.get('http://127.0.0.1:5000/routes/systems/shortest?from=' + $scope.start + '&to=' + $scope.destination)
        .success(function(data, status, headers, config){$scope.route = data.route});
      };
    }]);
}());
