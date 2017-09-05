'use strict';
angular.module('main')
.controller('DenunciasCtrl', function ($scope, Api) {

  $scope.denuncias = {};

  (function init () {
    Api.fetchDenuncias().then( function (res) {
      $scope.denuncias = res.data;
    });
  })();

});
