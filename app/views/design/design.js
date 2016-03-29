(function () {
  'use strict';

  // initialize module
  var app = angular.module('strandedApp.design', [
    'ui.router',
  ]);

  // configure route
  app.config([
    '$stateProvider',
    function ($stateProvider) {
      $stateProvider.state('nav.design', {
        url: '^/design',
        templateUrl: 'views/design/design.html',
        controller: 'DesignController',
      });
    }
  ]);

  // declare controller
  app.controller('DesignController', [
    '$scope',
    function ($scope) {
      // initialize variables

      // declare methods
    }
  ]);
}());
