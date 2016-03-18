(function () {
  'use strict';

  // initialize module
  var app = angular.module('strandedApp.nav', [
    'ui.router',
  ]);

  // configure state
  app.config([
    '$stateProvider',
    function ($stateProvider) {
      $stateProvider.state('nav', {
        abstract: true,
        url: '/nav',
        templateUrl: 'views/nav/nav.html',
        controller: 'NavController',
      });
    }
  ]);

  // declare controller
  app.controller('NavController', ['$scope', function ($scope) {
  }]);
}());
