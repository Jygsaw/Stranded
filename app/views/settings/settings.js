(function () {
  'use strict';

  // initialize module
  var app = angular.module('strandedApp.settings', [
    'ui.router',
  ]);

  // configure route
  app.config([
    '$stateProvider',
    function ($stateProvider) {
      $stateProvider.state('nav.settings', {
        url: '^/settings',
        templateUrl: 'views/settings/settings.html',
        controller: 'SettingsController',
      });
    }
  ]);

  // declare controller
  app.controller('SettingsController', [
    '$scope',
    '$http',
    function ($scope, $http) {
      // initialize variables
      $scope.sound = true;
      $scope.music = true;
      $scope.sfx = true;
      $scope.master_volume = 5;
      $scope.music_volume = 5;
      $scope.sfx_volume = 5;

      // declare methods
      $scope.submit = function () {
        console.log("settings update submitted");
        console.log("sound:", JSON.stringify($scope.sound));
        console.log("music:", JSON.stringify($scope.music));
        console.log("sfx:", JSON.stringify($scope.sfx));
        console.log("master_volume:", JSON.stringify($scope.master_volume));
        console.log("music_volume:", JSON.stringify($scope.music_volume));
        console.log("sfx_volume:", JSON.stringify($scope.sfx_volume));

        $http({
          method: 'GET',
          url: '/',
        }).then(function success(response) {
          console.log("settings update success");
        }, function error(response) {
          console.log("settings update error");
        });
      };
    }
  ]);
}());
