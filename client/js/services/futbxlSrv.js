(function() {

    'use strict';

    angular.module('futbxl').factory('futbxlSrv', function($http) {

    return {
      search: function(searchString) {
        var endpoint = '/api/search?searchString=' + searchString;
        return $http.get(endpoint);

      }
    }
    });

}());
