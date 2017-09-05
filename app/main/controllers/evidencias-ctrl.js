'use strict';
angular.module('main')
.controller('EvidenciasCtrl', function ($scope, Api) {

  $scope.evidencias = {};

  (function init () {
    Api.fetchEvidencias().then( function (res) {
      $scope.evidencias = res.data;
    });
  })();

});
