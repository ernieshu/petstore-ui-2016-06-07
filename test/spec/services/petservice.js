'use strict';

describe('Service: petservice', function () {

  // load the service's module
  beforeEach(module('petstoreUiApp'));

  // instantiate service
  var petservice;
  beforeEach(inject(function (_petservice_) {
    petservice = _petservice_;
  }));

  it('should do something', function () {
    expect(!!petservice).toBe(true);
  });

});
