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
  .controller('MainCtrl', ['$scope', '$http', 'ETHConfig', function ($scope, $http, ETHConfig) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $http.get(ETHConfig.API_END_POINT + '/systems').success(function(data) {
      $scope.systems = data.systems;
    });
  }]);
}());
