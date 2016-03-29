(function () {
  'use strict';

  // initialize module
  var app = angular.module('strandedApp.itemInfoDirective', [
  ]);

  // declare directive
  app.directive('itemInfo', [
    '$compile',
    function ($compile) {
      return {
        restrict: 'A',
        scope: {
          item: '=',
          clicker: '&',
        },
        templateUrl: 'directives/itemInfo/itemInfo.html',
        link: function (scope, elem) {
          // dynamically insert display directive based on item type
          var dynaTag = '<div ' + scope.item.type + '-info item="item"></div>';
          elem.find('.item-details').append($compile(dynaTag)(scope));
        },
      };
    }
  ]);

  // declare display directives
  app.directive('armorInfo', [
    function () {
      return {
        scope: {
          item: '=',
        },
        templateUrl: 'directives/itemInfo/templates/armorInfo.html',
      };
    }
  ]);
  app.directive('engineInfo', [
    function () {
      return {
        scope: {
          item: '=',
        },
        templateUrl: 'directives/itemInfo/templates/engineInfo.html',
      };
    }
  ]);
  app.directive('frameInfo', [
    function () {
      return {
        scope: {
          item: '=',
        },
        templateUrl: 'directives/itemInfo/templates/frameInfo.html',
      };
    }
  ]);
  app.directive('moduleInfo', [
    function () {
      return {
        scope: {
          item: '=',
        },
        templateUrl: 'directives/itemInfo/templates/moduleInfo.html',
      };
    }
  ]);
  app.directive('shieldInfo', [
    function () {
      return {
        scope: {
          item: '=',
        },
        templateUrl: 'directives/itemInfo/templates/shieldInfo.html',
      };
    }
  ]);
  app.directive('weaponInfo', [
    function () {
      return {
        scope: {
          item: '=',
        },
        templateUrl: 'directives/itemInfo/templates/weaponInfo.html',
      };
    }
  ]);
}());
