(function () {
  'use strict';

  // initialize module
  var app = angular.module('strandedApp.injectCssService', [
  ]);

  // declare service
  app.service('InjectCssService', [
    function () {
      this.inject = function (url) {
        var link = document.createElement('link');
        link.href = url;
        link.rel = 'stylesheet';
        angular.element('head').append(link);
      };
    }
  ]);
}());
