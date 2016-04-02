(function () {
  'use strict';

  // initialize module
  var app = angular.module('strandedApp.splash', [
    'ui.router',
    'strandedApp.injectCssService',
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
            'InjectCssService',
            function (InjectCssService) {
              InjectCssService.inject('views/splash/splash.css');
            }
          ],
        },
      });
    }
  ]);
}());
