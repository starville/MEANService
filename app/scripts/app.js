'use strict';

angular.module('meanserviceApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.router',
  'ui.bootstrap'
])
.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', '$provide',
  function ($stateProvider, $urlRouterProvider, $httpProvider, $provide) {

    /**
     * @description
     * This is ui-router config
     * use $urlRouteProvider, $stateProvider
     */
    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })

  }]);
