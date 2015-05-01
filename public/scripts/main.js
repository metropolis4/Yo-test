(function () {
  var yo = angular.module('yo', ['ngMock']);
  yo.controller('mainController', function ($scope) {
    $scope.name = "Your Name Goes Here";
  })
}());
