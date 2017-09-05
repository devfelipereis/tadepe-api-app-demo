'use strict';
angular.module('main', [
  'ionic',
  'ngCordova',
  'ui.router',
])
.config(function ($stateProvider, $urlRouterProvider) {

  // ROUTING with ui.router
  $urlRouterProvider.otherwise('/main/autorizacao');
  $stateProvider
    // this state is placed in the <ion-nav-view> in the index.html
    .state('main', {
      url: '/main',
      abstract: true,
      templateUrl: 'main/templates/menu.html',
      controller: 'MenuCtrl as menu'
    })
      .state('main.authorization', {
        url: '/autorizacao',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/authorization.html',
            controller: 'AuthorizationCtrl'
          }
        }
      })
      .state('main.obras', {
        url: '/obras',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/obras.html',
            controller: 'ObrasCtrl'
          }
        }
      })
      .state('main.contatos', {
        url: '/contatos',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/contatos.html',
            controller: 'ContatosCtrl'
          }
        }
      })
      .state('main.denuncias', {
        url: '/denuncias',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/denuncias.html',
            controller: 'DenunciasCtrl'
          }
        }
      })
      .state('main.evidencias', {
        url: '/evidencias',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/evidencias.html',
            controller: 'EvidenciasCtrl'
          }
        }
      })
      .state('main.instituicoes', {
        url: '/instituicoes',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/instituicoes.html',
            controller: 'InstituicoesCtrl'
          }
        }
      })
      .state('main.respostas', {
        url: '/respostas',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/respostas.html',
            controller: 'RespostasCtrl'
          }
        }
      });
});
