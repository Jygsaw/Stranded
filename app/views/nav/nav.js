(function () {
  'use strict';

  // initialize module
  var app = angular.module('strandedApp.nav', [
    'ui.router',
  ]);

  // configure state
  app.config([
    '$stateProvider',
    function ($stateProvider) {
      $stateProvider.state('nav', {
        abstract: true,
        url: '/nav',
        templateUrl: 'views/nav/nav.html',
        controller: 'NavController',
      });
    }
  ]);

  // declare directive
  app.directive('navCollapse', function () {
    return {
      restrict: 'A',
      link: function (scope, elem) {
        elem.on('click', function (event) {
          if (event.target.tagName === 'A' &&
              !$(event.target).hasClass('dropdown-toggle')) {
            $(this).collapse('hide');
          }
        });
      },
    };
  });

  // declare controller
  app.controller('NavController', ['$scope', function ($scope) {
    $scope.now = Date.now();
  }]);
}());
