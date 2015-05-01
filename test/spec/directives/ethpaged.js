'use strict';

describe('Directive: ethPaged', function () {

  // load the directive's module
  beforeEach(module('eveTravelHelperApp'));
  beforeEach(module('ethMock'));

  var element,
    scope,
    q;

  beforeEach(inject(function ($q, $rootScope) {
    scope = $rootScope.$new();
    scope.listFn = function(page){};
    scope.extractFn = function(data){};
    q = $q;
  }));

  it('should use supplied paginated request and data extraction methods to update scope variable with paginated data', inject(function ($compile) {
    scope.items = [];

    // Automatic request for first page
    spyOn(scope, 'listFn').and.callFake(function() {
        var deferred = q.defer();
        deferred.resolve({data: 'D1'});
        return deferred.promise;
    });
    spyOn(scope, 'extractFn').and.returnValue('S1');
    element = angular.element('<eth-paged items="items" list-fn="listFn(page)" extract-fn="extractFn(data)"></eth-paged>');
    element = $compile(element)(scope);

    expect(scope.listFn).toHaveBeenCalledWith(1);
    scope.$digest();
    expect(scope.extractFn).toHaveBeenCalledWith('D1');
    expect(scope.items).toEqual('S1');

    element.isolateScope().currentPage = 2;
    element.isolateScope().$digest();



  }));
});
