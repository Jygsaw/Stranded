(function () {
  'use strict';

  // initialize module
  var app = angular.module('strandedApp.StatCalc', [
  ]);

  // declare service
  app.service('StatCalc', [
    function () {
      // declare public methods
      this.calcProto = function (proto) {
        return {
          armor: this.calcArmor(proto),
          damage: this.calcDamage(proto),
          energy: this.calcEnergy(proto),
          radar: this.calcRadar(proto),
          range: this.calcRange(proto),
          shield: this.calcShield(proto),
          speed: this.calcSpeed(proto),
        };
      };

      this.calcArmor = function (proto) {
        var base = 0;
        proto.armor.forEach(function (elem) {
          base += elem.armor;
        });
        return base;
      };

      this.calcDamage = function (proto) {
        var base = 0;
        proto.weapon.forEach(function (elem) {
          base += elem.damage * elem.rof;
        });
        return base;
      };

      this.calcEnergy = function (proto) {
        var base = 0;
        proto.engine.forEach(function (elem) {
          base += elem.power;
        });
        return base;
      };

      this.calcRadar = function (proto) {
        var base = 0;
        proto.module.forEach(function (elem) {
          if (elem.radar) {
            base += elem.radar;
          }
        });
        return base;
      };

      this.calcRange = function (proto) {
        var maxRange = 0;
        proto.weapon.forEach(function (elem) {
          if (elem.range > maxRange) {
            maxRange = elem.range;
          }
        });
        return maxRange;
      };

      this.calcShield = function (proto) {
        var base = 0;
        proto.shield.forEach(function (elem) {
          base += elem.shield;
        });
        return base;
      };

      this.calcSpeed = function (proto) {
        var base = proto.frame ? proto.frame.speed : 0;
        proto.module.forEach(function (elem) {
          if (elem.speed) {
            base += elem.speed;
          }
        });
        return base;
      };
    }
  ]);
}());
