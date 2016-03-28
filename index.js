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
    var currentNode = root;
    var newNode = new Node(val);
    // Traverse to find position and add node
    while(currentNode) {
      if(val < currentNode.value) {
        if(!currentNode.left) {
          currentNode.left = newNode;
          break;
        }
        else {
          currentNode = currentNode.left;
        }
      }
      else {
        if(!currentNode.right) {
          currentNode.right = newNode;
          break;
        }
        else {
          currentNode = currentNode.right;
        }
      }
    } // while loop
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
