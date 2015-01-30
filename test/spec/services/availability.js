'use strict';

describe('Service: availability', function () {

  // load the service's module
  beforeEach(module('jallufinApp'));

  // instantiate service
  var availability;
  beforeEach(inject(function (_availability_) {
    availability = _availability_;
  }));

  it('should do something', function () {
    expect(!!availability).toBe(true);
  });

});
