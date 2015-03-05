'use strict';

describe('Service: BoltCalcs', function () {

  // load the service's module
  beforeEach(module('angularAppApp'));

  // instantiate service
  var BoltCalcs;
  beforeEach(inject(function (_BoltCalcs_) {
    BoltCalcs = _BoltCalcs_;
  }));

  it('should do something', function () {
    expect(!!BoltCalcs).toBe(true);
  });

});
