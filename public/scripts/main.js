(function () {
  var yo = angular.module('yo', []);
  yo.controller('mainController', function ($scope) {
    $scope.name = "Your Name Goes Here";
  });
}());