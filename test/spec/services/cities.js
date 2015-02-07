'use strict';

describe('Service: Cities', function () {

  // load the service's module
  beforeEach(module('jallufinApp'));

  // instantiate service
  var Cities;
  beforeEach(inject(function (_Cities_) {
    Cities = _Cities_;
  }));

  it('should do something', function () {
    expect(!!Cities).toBe(true);
  });

});
