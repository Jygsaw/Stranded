(function () {
  'use strict';

  // initialize module
  var app = angular.module('strandedApp', [
    'ui.router',
    'strandedApp.splash',
    'strandedApp.login',
    'strandedApp.nav',
  ]);

  // configure default route
  app.config([
    '$urlRouterProvider',
    function ($urlRouterProvider) {
      $urlRouterProvider.otherwise('/splash');
    }
  ]);
}());
