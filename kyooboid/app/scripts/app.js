'use strict';

/**
 * @ngdoc overview
 * @name kyooboidApp
 * @description
 * # kyooboidApp
 *
 * Main module of the application.
 */
angular
  .module('kyooboidApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
