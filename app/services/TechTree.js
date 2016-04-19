(function () {
  'use strict';

  // initialize module
  var app = angular.module('strandedApp.TechTree', [
    'strandedApp.Inventory',
  ]);

  // declare service
  app.service('TechTree', [
    'Inventory',
    function (Inventory) {
      // initialize private variables
      var techTrees = {};

      // declare private methods
      var buildTechTree = function (type) {
        // find root node
        var rootNode = Inventory.getFrames()[0];

        // initialize tree
        var graph = {
          root: rootNode,
          nodes: {},
          points: 0,
        };

        // build node list
        graph.nodes[rootNode.id] = {
          parents: [],
          children: [],
          details: rootNode,
          selected: false,
        };

        return graph;
      };

      // declare public methods
      this.getTechTrees = function () {
        // ['assault', 'frontline', 'recon', 'support'].forEach(function (elem) {
        ['assault'].forEach(function (elem) {
          techTrees[elem] = buildTechTree(elem);
        });

        return techTrees;
      };
    }
  ]);
}());
