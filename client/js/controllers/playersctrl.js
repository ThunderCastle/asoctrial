(function() {
    'use strict'


    angular.module('futbxl').controller('playersCtrl', function ($scope, $http, playersSrv) {
      $scope.players = [];
      $scope.searchPlayer = function(){
        $http.get("http://localhost:8888/findPlayersByName?name=" + $scope.searchterm).then(function (res) {
          $scope.players=res.data
          console.log($scope.players)

        })
      }
    });

}());
