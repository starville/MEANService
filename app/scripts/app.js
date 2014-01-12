'use strict';

angular.module('meanserviceApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'snap'
])
  .config(function ($routeProvider, snapRemoteProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    snapRemoteProvider.globalOptions = {
      disable: 'right'
    };
  });
