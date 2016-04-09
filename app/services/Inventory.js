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
              armor: 10,
            },
            {
              id: 12,
              name: 'Armor Mk.2',
              type: 'armor',
              armor: 20,
            },
            {
              id: 21,
              name: 'Engine Mk.1',
              type: 'engine',
              power: 10,
            },
            {
              id: 22,
              name: 'Engine Mk.2',
              type: 'engine',
              power: 20,
            },
            {
              id: 31,
              name: 'Frame Mk.1',
              type: 'frame',
              hitpoints: 10,
              speed: 10,
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
              hitpoints: 20,
              speed: 10,
              slots: {
                armor: 1,
                engine: 1,
                module: 1,
                shield: 1,
                weapon: 1,
              },
            },
            {
              id: 41,
              name: 'Booster Mk.1',
              type: 'module',
              speed: 10,
            },
            {
              id: 42,
              name: 'Radar Mk.1',
              type: 'module',
              radar: 30,
            },
            {
              id: 51,
              name: 'Shield Mk.1',
              type: 'shield',
              shield: 15,
              refresh: 3,
            },
            {
              id: 52,
              name: 'Shield Mk.2',
              type: 'shield',
              shield: 15,
              refresh: 2,
            },
            {
              id: 61,
              name: 'Weapon Mk.1',
              type: 'weapon',
              damage: 10,
              rof: 15,
              range: 15,
            },
            {
              id: 62,
              name: 'Weapon Mk.2',
              type: 'weapon',
              damage: 20,
              rof: 10,
              range: 25,
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
