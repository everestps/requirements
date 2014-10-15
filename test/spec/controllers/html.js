'use strict';

describe('Controller: HtmlctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('websiteApp'));

  var HtmlctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HtmlctrlCtrl = $controller('HtmlctrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});