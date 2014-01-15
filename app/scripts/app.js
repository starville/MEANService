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
      .state('mylevel', {
        url: '/mylevel',
        templateUrl: 'views/mylevel.html',
        controller: 'MainCtrl'
      })
      .state('myqna', {
        url: '/myqna',
        templateUrl: 'views/myqna.html',
        controller: 'MainCtrl'
      })
      .state('myfollowing', {
        url: '/myfollowing/{userId:[0-9]{1,4}}',
        templateUrl: 'views/myfollowing.html',
        controller: 'MainCtrl'
      })
      .state('techarea', {
        url: '/techarea/{techId:[0-9]{1,4}}',
        templateUrl: 'views/techarea.html',
        controller: 'MainCtrl'
      })
      .state('gururanking', {
        url: '/gururanking',
        templateUrl: 'views/gururanking.html',
        controller: 'MainCtrl'
      })
      .state('gurumember', {
        url: '/gurumember',
        templateUrl: 'views/gurumember.html',
        controller: 'MainCtrl'
      });

  }])
.run(['$rootScope', '$state', '$stateParams', '$http', '$location',
  function ($rootScope, $state, $stateParams, $http, $location) {

    /**
     * @description
     * It's very handy to add references to $state and $stateParams to the $rootScope
     * so that you can access them from any scope within your applications.For example,
     * <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
     * to active whenever 'contacts.list' or one of its decendents is active.
     */
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;

    /**
     * @description
     * Reset error when a new view is loaded
     */
    $rootScope.$on('$viewContentLoaded', function() {

    });

    /**
     * @description
     * when we use 'ui-router' for routing, we must use $statChangeStart or $stateChangeSuccess
     * instead of $routeChangeStart
     */
    $rootScope.$on('$stateChangeStart', function(evt, toState, toParams, fromState, fromParams) {

    });
  

  }]);




