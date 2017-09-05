'use strict';
angular.module('main')
.controller('RespostasCtrl', function ($scope, Api) {

  $scope.respostas = {};

  (function init () {
    Api.fetchRespostas().then( function (res) {
      $scope.respostas = res.data;
    });
  })();

});
