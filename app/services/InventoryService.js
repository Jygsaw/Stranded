(function () {
  'use strict';

  // initialize module
  var app = angular.module('strandedApp.inventoryService', [
  ]);

  // declare service
  app.service('InventoryService', [
    function () {
      // initialize private variables
      var inventory = null;

      // declare private methods
      var matchesType = function (type) {
        return function (elem) {
          return elem.type === type ? true : false;
        };
      };

      // declare public methods
      this.getInventory = function () {
        if (inventory === null) {
          // fetch data from db
          inventory = [];
        }
        return inventory;
      };

      this.getArmors = function () {
        return this.getInventory().filter(matchesType('armor'));
      };

      this.getEngines = function () {
        return this.getInventory().filter(matchesType('engine'));
      };

      this.getFrames = function () {
        return this.getInventory().filter(matchesType('frame'));
      };

      this.getModules = function () {
        return this.getInventory().filter(matchesType('module'));
      };

      this.getShields = function () {
        return this.getInventory().filter(matchesType('shield'));
      };

      this.getWeapons = function () {
        return this.getInventory().filter(matchesType('weapon'));
      };
    }
  ]);
}());
