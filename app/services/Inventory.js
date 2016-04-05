(function () {
  'use strict';

  // initialize module
  var app = angular.module('strandedApp.Inventory', [
  ]);

  // declare service
  app.service('Inventory', [
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
          // TODO replace dummy data with db call
          inventory = [
            {
              id: 11,
              name: 'Armor Mk.1',
              type: 'armor',
            },
            {
              id: 12,
              name: 'Armor Mk.2',
              type: 'armor',
            },
            {
              id: 21,
              name: 'Engine Mk.1',
              type: 'engine',
            },
            {
              id: 22,
              name: 'Engine Mk.2',
              type: 'engine',
            },
            {
              id: 31,
              name: 'Frame Mk.1',
              type: 'frame',
              slots: {
                armor: 1,
                engine: 1,
                module: 0,
                shield: 0,
                weapon: 2,
              },
            },
            {
              id: 32,
              name: 'Frame Mk.2',
              type: 'frame',
              slots: {
                armor: 1,
                engine: 1,
                module: 0,
                shield: 1,
                weapon: 1,
              },
            },
            {
              id: 41,
              name: 'Module Mk.1',
              type: 'module',
            },
            {
              id: 42,
              name: 'Module Mk.2',
              type: 'module',
            },
            {
              id: 51,
              name: 'Shield Mk.1',
              type: 'shield',
            },
            {
              id: 52,
              name: 'Shield Mk.2',
              type: 'shield',
            },
            {
              id: 61,
              name: 'Weapon Mk.1',
              type: 'weapon',
            },
            {
              id: 62,
              name: 'Weapon Mk.2',
              type: 'weapon',
            },
          ];
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
