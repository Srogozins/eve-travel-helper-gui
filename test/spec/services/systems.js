'use strict';

// TODO: isolate all dependency modules
describe('Service: Systems', function () {

  // load the service's module
  beforeEach(module('eveTravelHelperApp'));

  // instantiate service
  var Systems,
  $httpBackend;

  beforeEach(inject(function (_$httpBackend_, _Systems_) {
    $httpBackend = _$httpBackend_;
    Systems = _Systems_;
  }));

  it('should do paginated requests and return the responses', function () {
    $httpBackend.expectGET('http://127.0.0.1:5000/systems/page/1?per_page=20').
        respond({systems: [{name: 'SYS1'}, {name: 'SYS2'}]});
    Systems.list()
    .success(function(data) {
      expect(data.systems).toEqual([{name: 'SYS1'}, {name: 'SYS2'}]);
    });
    $httpBackend.flush();

    $httpBackend.expectGET('http://127.0.0.1:5000/systems/page/2?per_page=20').
        respond({systems: [{name: 'SYS3'}, {name: 'SYS4'}]});
    Systems.list(2)
    .success(function(data) {
      expect(data.systems).toEqual([{name: 'SYS3'}, {name: 'SYS4'}]);
    });
    $httpBackend.flush();

    $httpBackend.expectGET('http://127.0.0.1:5000/systems/page/2?per_page=10').
        respond({systems: [{name: 'SYS5'}, {name: 'SYS6'}]});
    Systems.list(2, 10)
    .success(function(data) {
      expect(data.systems).toEqual([{name: 'SYS5'}, {name: 'SYS6'}]);
    });
    $httpBackend.flush();

  });

});
