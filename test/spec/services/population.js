'use strict';

describe('Service: Population', function () {

  // load the service's module
  beforeEach(module('jallufinApp'));

  // instantiate service
  var Population;
  beforeEach(inject(function (_Population_) {
    Population = _Population_;
  }));

  it('should do something', function () {
    expect(!!Population).toBe(true);
  });

});
