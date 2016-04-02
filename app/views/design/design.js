(function () {
  'use strict';

  // initialize module
  var app = angular.module('strandedApp.design', [
    'ui.router',
    'strandedApp.filters',
    'strandedApp.Inventory',
    'strandedApp.itemInfoDirective',
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
    'Inventory',
    function ($scope, Inventory) {
      // initialize variables
      $scope.parts = {
        armors: Inventory.getArmors(),
        engines: Inventory.getEngines(),
        frames: Inventory.getFrames(),
        modules: Inventory.getModules(),
        shields: Inventory.getShields(),
        weapons: Inventory.getWeapons(),
      };

      // declare methods
    }
  ]);
}());
