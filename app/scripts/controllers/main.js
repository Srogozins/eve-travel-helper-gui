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
    .controller('MainCtrl', ['$scope', '$http', '$log', 'Systems', 'ETHConfig', function($scope, $http, $log, Systems, ETHConfig) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
      $scope.systems = [];
      $scope.isLoading = null;
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

      // TODO: Factor out
    $scope.getRoute = function() {
      $http.get(ETHConfig.API_END_POINT + '/routes/systems/shortest?from=' + $scope.start + '&to=' + $scope.destination)
      .success(function(data, status, headers, config){$scope.route = data.route});
    };
    }]);
}());
