'use strict';

/**
 * @ngdoc overview
 * @name websiteApp
 * @description
 * # websiteApp
 *
 * Main module of the application.
 */
angular
  .module('websiteApp', [
    'ngRoute'
  ])
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
      .when('/html', {
        templateUrl: 'views/html.html',
        controller: 'HtmlCtrl'
      })
      .when('/hardware', {
        templateUrl: 'views/hardware.html',
        controller: 'HardCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
