(function () {
  'use strict';
  /**
  * @ngdoc service
  * @name eveTravelHelperApp.Systems
  * @description
  * # Systems
  * Service for accessing solar system data
  * @requires $http $log ETHConfig
  */
  angular.module('eveTravelHelperApp')
  .service('Systems', ['$http', '$log', 'ETHConfig', function($http, $log, ETHConfig) {
    var SYSTEM_END_POINT = ETHConfig.API_END_POINT + '/systems';
    var PAGE_SUFFIX = '/page';

    /**
    * @ngdoc function
    * @name eveTravelHelperApp.Systems:list
    * @description
    * # list
    * Retrieves paginated solar system data,
    * @param {integer} page page number to retrieve, defaults to 1
    * @param {integer} number of systems per page, defaults to 20
    * @returns {HttpPromise} promise of the requested system data page
    */
    this.list = function(page, perPage) {
      if( typeof page === 'undefined' ){page = 1;}
      if( typeof perPage === 'undefined' ) {perPage = 20;}
      /*jshint camelcase: false */
      return $http({
        url: SYSTEM_END_POINT + PAGE_SUFFIX + '/' + page,
        method: 'GET',
        params: {per_page: perPage}
        })
        .success(function(data) {
          $log.log('System data retrieved: ' + data);
        })
        .error(function(data) {
          $log.log('System data retrieval failed: ' + data);
        });

        };
        }]);
      }());
