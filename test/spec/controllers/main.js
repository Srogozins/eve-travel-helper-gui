'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('eveTravelHelperApp'));

  var MainCtrl,
    scope,
    $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('http://127.0.0.1:5000/systems').
        respond({systems: [{name: 'SYS1'}, {name: 'SYS2'}]});
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
  it('should create "systems" model', function () {
    expect(scope.systems).toBeUndefined();
    $httpBackend.flush();
    expect(scope.systems).toEqual([{name: 'SYS1'}, {name: 'SYS2'}]);
  });
});
