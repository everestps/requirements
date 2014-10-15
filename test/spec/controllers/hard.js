'use strict';

describe('Controller: HardCtrl', function () {

  // load the controller's module
  beforeEach(module('websiteApp'));

  var HardCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HardctrlCtrl = $controller('HardCtrl', {
      $scope: scope
    });
  }));

});
