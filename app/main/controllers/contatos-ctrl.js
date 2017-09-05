'use strict';
angular.module('main')
.controller('ContatosCtrl', function ($scope, Api) {

  $scope.contatos = {};

  (function init () {
    Api.fetchContatos().then( function (res) {
      $scope.contatos = res.data;
    });
  })();

});
