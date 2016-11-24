(function () {
  'use strict';

  // x = "deb";

  angular.module('myFirstApp', [])

  .controller('MyFirstController', function($scope){
    $scope.name = "Debojyoti";
    $scope.sayHello = function () {
      return "Hello Angular!";
    };
  });

})();
