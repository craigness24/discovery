'use strict';

describe('Controller: CalcCtrl', function() {

  // load the controller's module
  beforeEach(module('angularAppApp'));

  var CalcCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    CalcCtrl = $controller('CalcCtrl', {
      $scope: scope
    });
  }));

  it('sum should be 7', function() {
    scope.var1 = 3;
    scope.var2 = 4;
    scope.calc();
    expect(scope.sum).toBe(7);
  });
});
