(function () {
  'use strict';

  // initialize module
  var app = angular.module('strandedApp.account', [
    'ui.router',
  ]);

  // configure route
  app.config([
    '$stateProvider',
    function ($stateProvider) {
      $stateProvider.state('nav.account', {
        url: '^/account',
        templateUrl: 'views/account/account.html',
        controller: 'AccountController',
      });
    }
  ]);

  // declare controller
  app.controller('AccountController', [
    '$scope',
    '$http',
    function ($scope, $http) {
      // initialize variables
      $scope.username = '';
      $scope.email = '';
      $scope.password = '';

      // declare methods
      $scope.submit = function () {
        console.log("account update submitted");
        console.log("email:", JSON.stringify($scope.email));
        console.log("username:", JSON.stringify($scope.username));
        console.log("password:", JSON.stringify($scope.password));

        $http({
          method: 'GET',
          url: '/',
        }).then(function success(response) {
          console.log("account update success");
        }, function error(response) {
          console.log("account update error");
        });
      };
    }
  ]);
}());
