'use strict';

describe('Controller: CalcCtrl', function () {

  // load the controller's module
  beforeEach(module('angularAppApp'));

  var CalcCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CalcCtrl = $controller('CalcCtrl', {
      $scope: scope
    });
  }));

  it('sum should be 34', function () {
      scope.var1 = 3;
      scope.var3 = 4;
    expect(scope.calc).toBe('34');
  });
});
