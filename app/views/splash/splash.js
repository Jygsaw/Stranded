(function () {
  'use strict';

  // initialize module
  var app = angular.module('strandedApp.splash', [
    'ui.router',
  ]);

  // configure state
  app.config([
    '$stateProvider',
    function ($stateProvider) {
      $stateProvider.state('splash', {
        url: '/splash',
        templateUrl: 'views/splash/splash.html',
      });
    }
  ]);
}());
