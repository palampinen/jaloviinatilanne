'use strict';

/**
 * @ngdoc overview
 * @name jallufinApp
 * @description
 * # jallufinApp
 *
 * Main module of the application.
 */
angular
  .module('jallufinApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase',
    'angles'
  ])

  .value('fbURL', 'https://jallu.firebaseio.com/')

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });


