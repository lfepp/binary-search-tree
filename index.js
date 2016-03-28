'use strict';

module.exports = binaryTree;

binaryTree.prototype = {

  // Constructor
  constructor: binaryTree,

  // Method to see if tree contains a value
  contains: function(val) {

  },
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
  }, // add method
  // Remove node method
  remove: function(val) {

  }, // remove method
  // Get size method
  size: function() {

  }, // size method
  // Get min value
  min: function() {
    var currentNode = this.root;
    // Case for no root
    if(!currentNode) {
      console.error('This tree does not yet contain any values');
      return;
    }
    while(currentNode) {
      if(!currentNode.left) {
        return currentNode;
      }
      else {
        currentNode = currentNode.left;
      }
    }
  }, // min method
  // Get max value
  max: function() {
    var currentNode = this.root;
    // Case for no root
    if(!currentNode) {
      console.error('This tree does not yet contain any values');
      return;
    }
    while(currentNode) {
      if(!currentNode.right) {
        return currentNode;
      }
      else {
        currentNode = currentNode.right;
      }
    }
  } // max method
};

function binaryTree() {
  this.root = null;
};

function Node(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}
