(function () {
  'use strict';

  // initialize module
  var app = angular.module('strandedApp.research', [
    'ui.router',
    'strandedApp.filters',
    'strandedApp.InjectCss',
    'strandedApp.TechTree',
  ]);

  // configure route
  app.config([
    '$stateProvider',
    function ($stateProvider) {
      $stateProvider.state('nav.research', {
        url: '^/research',
        templateUrl: 'views/research/research.html',
        controller: 'ResearchController',
        resolve: {
          css: [
            'InjectCss',
            function (InjectCss) {
              InjectCss.inject('views/research/research.css');
            }
          ],
        },
      });
    }
  ]);

  // declare controller
  app.controller('ResearchController', [
    '$scope',
    'TechTree',
    function ($scope, TechTree) {
      // initialize variables
      $scope.techTrees = TechTree.getTechTrees();

      // declare private functions

      // declare public methods
      $scope.resetAll = function () {
        console.log("resetting item selections");
      }

      $scope.selectTech = function (item) {
        console.log("selecting item:", item);
      }
    }
  ]);
}());
