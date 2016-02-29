(function () {
  'use strict';

  // initialize module
  var app = angular.module('strandedApp', [
    'ui.router',
  ]);

  // configure default route
  app.config([
    '$urlRouterProvider',
    function ($urlRouterProvider) {
      $urlRouterProvider.otherwise('/');
    }
  ]);
}());
