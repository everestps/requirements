'use strict';

describe('Controller: HardctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('websiteApp'));

  var HardctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HardctrlCtrl = $controller('HardctrlCtrl', {
      $scope: scope
    });
  }));

});
