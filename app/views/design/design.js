(function () {
  'use strict';

  // initialize module
  var app = angular.module('strandedApp.design', [
    'ui.router',
    'strandedApp.filters',
    'strandedApp.inventoryService',
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
    'InventoryService',
    function ($scope, InventoryService) {
      // initialize variables
      $scope.parts = {
        armors: InventoryService.getArmors(),
        engines: InventoryService.getEngines(),
        frames: InventoryService.getFrames(),
        modules: InventoryService.getModules(),
        shields: InventoryService.getShields(),
        weapons: InventoryService.getWeapons(),
      };

      // declare methods
    }
  ]);
}());
