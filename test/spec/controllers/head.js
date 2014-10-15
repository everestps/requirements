'use strict';

describe('Controller: HeadCtrl', function () {

  // load the controller's module
  beforeEach(module('websiteApp'));

  var HeadCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HeadCtrl = $controller('HeadCtrl', {
      $scope: scope
    });
  }));
});
