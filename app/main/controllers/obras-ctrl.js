'use strict';
angular.module('main')
.controller('ObrasCtrl', function ($scope, Api) {

  $scope.obras = {};

  (function init () {
    Api.fetchObras().then( function (res) {
      $scope.obras = res.data;
    });
  })();

});
