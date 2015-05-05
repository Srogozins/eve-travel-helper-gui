'use strict';

/**
 * @ngdoc overview
 * @name eveTravelHelperApp
 * @description
 * # eveTravelHelperApp
 *
 * Main module of the EVE Online Travel Helper GUI application.
 */
angular
  .module('eveTravelHelperApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(['$routeProvider', 'paginationConfig', function ($routeProvider, paginationConfig) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
      paginationConfig.itemsPerPage = 20;
      paginationConfig.maxSize = 10;
  }])
  .constant('ETHConfig', {API_END_POINT: 'http://127.0.0.1:5000'});
