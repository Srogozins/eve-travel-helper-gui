(function () {
  'use strict';
  /**
  * @ngdoc service
  * @name eveTravelHelperApp.Systems
  * @description
  * # Systems
  * Service for accessing solar system data
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
    * @param {int} page page number to retrieve, defaults to 1
    * @param {int} number of systems per page, defaults to 20
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
