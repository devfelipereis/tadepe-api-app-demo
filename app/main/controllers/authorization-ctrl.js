'use strict';
angular.module('main')
.controller('AuthorizationCtrl', function ($scope, Api) {

  $scope.authorization = {};

  (function init () {
    Api.fetchToken().then( function (res) {
      $scope.authorization = res.token;
    });
  })();

});
