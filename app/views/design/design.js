(function () {
  'use strict';

  // initialize module
  var app = angular.module('strandedApp.design', [
    'ui.router',
    'strandedApp.filters',
    'strandedApp.Inventory',
    'strandedApp.StatCalc',
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
    '$window',
    'Inventory',
    'StatCalc',
    function ($scope, $window, Inventory, StatCalc) {
      // initialize variables
      $scope.parts = {
        armors: Inventory.getArmors(),
        engines: Inventory.getEngines(),
        frames: Inventory.getFrames(),
        modules: Inventory.getModules(),
        shields: Inventory.getShields(),
        weapons: Inventory.getWeapons(),
      };

      $scope.proto = {
        frame: null,
      };
      resetProto();

      $scope.stats = {};
      $scope.$watch('proto', function (newVal, oldVal, scope) {
        $scope.stats = StatCalc.calcProto($scope.proto);
      }, true);

      // declare private functions
      function resetProto() {
        $scope.proto.armor = [];
        $scope.proto.engine = [];
        $scope.proto.module = [];
        $scope.proto.shield = [];
        $scope.proto.weapon = [];
      };

      // declare public methods
      $scope.selectPart = function (type, part) {
        // set frame
        if (type === 'frame') {
          $scope.proto.frame = part;
          resetProto();
        } else {
          // trigger error if no frame selected
          if ($scope.proto.frame === null) {
            console.warn('No frame selected');
            $window.alert('No frame selected');
            return;
          }

          // add part to prototype if room available
          if ($scope.proto[type].length < $scope.proto.frame.slots[type]) {
            $scope.proto[type].push(part);
          } else {
            console.warn('No empty slots');
            $window.alert('No empty slots');
            return;
          }
        }
      };
    }
  ]);
}());
