'use strict';
angular.module('main')
.controller('InstituicoesCtrl', function ($scope, Api) {

  $scope.instituicoes = {};

  (function init () {
    Api.fetchInstituicoes().then( function (res) {
      $scope.instituicoes = res.data;
    });
  })();

});
