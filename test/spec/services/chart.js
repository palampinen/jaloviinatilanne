'use strict';

describe('Service: Chart', function () {

  // load the service's module
  beforeEach(module('jallufinApp'));

  // instantiate service
  var Chart;
  beforeEach(inject(function (_Chart_) {
    Chart = _Chart_;
  }));

  it('should do something', function () {
    expect(!!Chart).toBe(true);
  });

});
