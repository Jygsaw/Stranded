(function () {
  'use strict';

  // initialize module
  var app = angular.module('strandedApp.injectCssService', [
  ]);

  // declare service
  app.service('InjectCssService', [
    '$q',
    function ($q) {
      this.inject = function (url) {
        return $q(function (resolve, reject) {
          var link = document.createElement('link');
          link.href = url;
          link.rel = 'stylesheet';
          link.onload = resolve;
          angular.element('head').append(link);
        });
      };
    }
  ]);
}());
