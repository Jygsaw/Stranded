(function () {
  'use strict';

  // initialize module
  var app = angular.module('strandedApp', [
    'ui.router',
    'strandedApp.splash',
    'strandedApp.login',
    'strandedApp.nav',
    'strandedApp.dash',
    'strandedApp.account',
  ]);

  // configure default route
  app.config([
    '$urlRouterProvider',
    function ($urlRouterProvider) {
      $urlRouterProvider.otherwise('/splash');
    }
  ]);
}());
