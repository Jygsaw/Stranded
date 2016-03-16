(function () {
  'use strict';

  // initialize module
  var app = angular.module('strandedApp.login', [
    'ui.router',
  ]);

  // configure state
  app.config([
    '$stateProvider',
    function ($stateProvider) {
      $stateProvider.state('login', {
        url: '/login',
        templateUrl: 'views/login/login.html',
        controller: 'LoginController',
      });
    }
  ]);

  // declare controller
  app.controller('LoginController', [
    '$scope',
    '$http',
    '$state',
    function ($scope, $http, $state) {
      // initialize variables
      $scope.username = '';
      $scope.password = '';

      // declare methods
      $scope.submit = function () {
        console.log("credentials submitted");
        console.log("username:", JSON.stringify($scope.username));
        console.log("password:", JSON.stringify($scope.password));

        $http({
          method: 'GET',
          url: '/',
        }).then(function success(response) {
          console.log("login success");

          // send user to next page
          $state.go('nav.dash');
        }, function error(response) {
          console.log("login error");
        });
      };
    }
  ]);
}());
