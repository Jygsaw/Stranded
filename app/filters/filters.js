(function () {
  'use strict';

  // initialize module
  var app = angular.module('strandedApp.filters', [
  ]);

  // declare service
  app.filter('upperFirst', [
    function () {
      return function (input) {
        return (typeof input === 'string')
          ? input.charAt(0).toUpperCase() + input.slice(1)
          : input;
      };
    }
  ]);
}());
