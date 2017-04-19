(function() {
    'use strict'


    angular.module('futbxl').controller('futbxlCtrl', function ($scope, futbxlSrv) {

      $scope.search = function (searchString) {
        futbxlSrv.search(searchString).then(function (response) {
          console.debug('searchResults', response.data);
          $scope.results = response.data;
        });

      };

      $scope.searchString = '';

      $scope.debounce = {
        updateOn: 'default blur',
        debounce: {'default': 250, 'blur': 0}
      }

    });

}());
