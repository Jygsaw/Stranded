(function () {
  'use strict';

  // initialize module
  var app = angular.module('strandedApp.battle', [
    'ui.router',
    'strandedApp.InjectCss',
  ]);

  // configure route
  app.config([
    '$stateProvider',
    function ($stateProvider) {
      $stateProvider.state('nav.battle', {
        url: '^/battle',
        templateUrl: 'views/battle/battle.html',
        controller: 'BattleController',
        resolve: {
          css: [
            'InjectCss',
            function (InjectCss) {
              InjectCss.inject('views/battle/battle.css');
            }
          ],
        },
      });
    }
  ]);

  // declare controller
  app.controller('BattleController', [
    '$scope',
    function ($scope) {
      // initialize variables

      // declare private functions

      // declare public methods
    }
  ]);
}());
