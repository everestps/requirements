'use strict';

/**
 * @ngdoc function
 * @name websiteApp.controller:HtmlctrlCtrl
 * @description
 * # HtmlctrlCtrl
 * Controller of the websiteApp
 */
angular.module('websiteApp')
  .controller('HtmlctrlCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });