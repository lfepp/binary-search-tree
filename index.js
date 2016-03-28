'use strict';

module.exports = binaryTree;

binaryTree.prototype = {

  // Constructor
  constructor: binaryTree,

  // Add node method
  add: function(val) {
    var root = this.root;
    // Set root
    if(!root) {
      this.root = new Node(val);
      return;
    }
    // Traverse to find position and add node
  } // add method
};

function binaryTree() {
  this.root = null;
};

function Node(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}
