(function () {
  'use strict';

  // initialize module
  var app = angular.module('strandedApp.dash', [
    'ui.router',
  ]);

  // configure state
  app.config([
    '$stateProvider',
    function ($stateProvider) {
      $stateProvider.state('nav.dash', {
        url: '^/dash',
        templateUrl: 'views/dash/dash.html',
        controller: 'DashController',
      });
    }
  ]);

  // declare controller
  app.controller('DashController', ['$scope', function ($scope) {
  }]);
}());
