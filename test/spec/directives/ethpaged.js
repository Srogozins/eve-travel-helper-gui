'use strict';

describe('Directive: ethPaged', function () {

  // load the directive's module
  beforeEach(module('eveTravelHelperApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<eth-paged></eth-paged>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the ethPaged directive');
  }));
});
