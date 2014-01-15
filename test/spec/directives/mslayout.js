'use strict';

describe('Directive: msLayout', function () {

  // load the directive's module
  beforeEach(module('meanserviceApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ms-layout></ms-layout>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the msLayout directive');
  }));
});
