(function () {
  'use strict';

  // initialize module
  var app = angular.module('strandedApp.splash', [
    'ui.router',
    'strandedApp.InjectCss',
  ]);

  // configure state
  app.config([
    '$stateProvider',
    function ($stateProvider) {
      $stateProvider.state('splash', {
        url: '/splash',
        templateUrl: 'views/splash/splash.html',
        resolve: {
          css: [
            'InjectCss',
            function (InjectCss) {
              InjectCss.inject('views/splash/splash.css');
            }
          ],
        },
      });
    }
  ]);
}());
