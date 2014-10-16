'use strict';

describe('Controller: HtmlCtrl', function () {

  // load the controller's module
  beforeEach(module('websiteApp'));

  var HtmlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HtmlCtrl = $controller('HtmlCtrl', {
      $scope: scope
    });
  }));

});
