'use strict';

/**
 * @ngdoc function
 * @name websiteApp.controller:HeadctrlCtrl
 * @description
 * # HeadctrlCtrl
 * Controller of the websiteApp
 */
angular.module('websiteApp')
  .controller('HeadCtrl', function ($scope, $location) {
    $scope.isActive = function (viewLocation) {
      return viewLocation === $location.path();
    };
  });
