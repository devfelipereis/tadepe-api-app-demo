'use strict';
( function () {
  angular.module('main')
    .factory('Api', Api);

  Api.$inject = ['$http', 'Config'];

  function Api ($http, Config) {
    var baseURL = Config.ENV.SERVER_URL;
    var token = null;

    var service = {
      fetchToken: fetchToken
      , fetchObras: fetchObras
      , fetchContatos: fetchContatos
      , fetchDenuncias: fetchDenuncias
      , fetchEvidencias: fetchEvidencias
      , fetchInstituicoes: fetchInstituicoes
      , fetchRespostas: fetchRespostas
    };

    return service;

    function fetchToken () {
      return $http.post(baseURL + 'auths', {
        name: 'api-test'
      }).then(function (res) {
        token = res.data.token;
        return res.data;
      });
    }

    function fetchObras () {
      var requestData = '?name=Escola Municipal de Educação Básica Vila do Salto - Luiz Alves - SC';
      return $http.get(baseURL + 'projects/content' + requestData, {
        headers: {'Authorization': token}
      });
    }

    function fetchContatos () {
      var requestData = '?id=2116';
      return $http.get(baseURL + 'contacts/content' + requestData, {
        headers: {'Authorization': token}
      });
    }

    function fetchDenuncias () {
      var requestData = '?project_name=Rua Projetada N';
      return $http.get(baseURL + 'inspections/content' + requestData, {
        headers: {'Authorization': token}
      });
    }

    function fetchEvidencias () {
      var requestData = '?project_name=Rua Projetada N';
      return $http.get(baseURL + 'evidences/content' + requestData, {
        headers: {'Authorization': token}
      });
    }

    function fetchInstituicoes () {
      var requestData = '?name=Pandô Apps';
      return $http.get(baseURL + 'institutions/content' + requestData, {
        headers: {'Authorization': token}
      });
    }

    function fetchRespostas () {
      var requestData = '?id=1';
      return $http.get(baseURL + 'answers/content' + requestData, {
        headers: {'Authorization': token}
      });
    }
  }
})();
