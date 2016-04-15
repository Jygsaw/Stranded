(function () {
  'use strict';

  // initialize module
  var app = angular.module('strandedApp.ranking', [
    'ui.router',
    'strandedApp.InjectCss',
  ]);

  // configure route
  app.config([
    '$stateProvider',
    function ($stateProvider) {
      $stateProvider.state('nav.ranking', {
        url: '^/ranking',
        templateUrl: 'views/ranking/ranking.html',
        controller: 'RankingController',
        resolve: {
          css: [
            'InjectCss',
            function (InjectCss) {
              InjectCss.inject('views/ranking/ranking.css');
            }
          ],
        },
      });
    }
  ]);

  // declare controller
  app.controller('RankingController', [
    '$scope',
    function ($scope) {
      // initialize variables

      // declare private functions

      // declare public methods
    }
  ]);
}());
