describe('mainController', function () {
  var scope;
  beforeEach(angular.mock.module('yo'));
  beforeEach(angular.mock.inject(function ($rootscope, $controller) {
    scope = $rootscope.$new();
    $controller('mainController', { $scope: scope });
  }));

  it('Should have var name = "Your name goes here"', function () {
    expect(scope.name).toBe("Your name goes here");
  });
});
