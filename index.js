'use strict';

module.exports = binaryTree;

binaryTree.prototype = {

  // Constructor
  constructor: binaryTree,

  // Method to see if tree contains a value
  contains: function(val) {
    var currentNode = this.root;
    // Case for no root
    if(!currentNode) {
      console.error('This tree does not yet contain any values');
      return;
    }
    while(true) {
      if(!currentNode) {
        return false;
      }
      else if(val === currentNode.value) {
        return true;
      }
      else if(val < currentNode.value) {
        currentNode = currentNode.left;
      }
      else {
        currentNode = currentNode.right;
      }
    }
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
    var output = 0;
    this.traverse(function(currentNode) {
      output++;
    });
    return output;
  }, // size method

  // Get min value
  min: function() {
    var currentNode = this.root;
    // Case for no root
    if(!currentNode) {
      console.error('This tree does not yet contain any values');
      return;
    }
    while(currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.value;
  }, // min method

  // Get max value
  max: function() {
    var currentNode = this.root;
    // Case for no root
    if(!currentNode) {
      console.error('This tree does not yet contain any values');
      return;
    }
    while(currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode.value;
  }, // max method

  // Get sorted array of values
  toArray: function() {
    var arr = [];
    this.traverse(function(currentNode) {
      arr.push(currentNode.value);
    });
    return arr;
  }, // toArray method

  // Helper traverse method for size() and toArray()
  traverse: function(method) {
    inOrder(this.root);
    // Helper method for traversing the nodes in order
    function inOrder(currentNode) {
      if(currentNode.left) {
        inOrder(currentNode.left);
      }
      method.call(this, currentNode);
      if(currentNode.right) {
        inOrder(currentNode.right);
      }
    };
  } // traverse method
};

function binaryTree() {
  this.root = null;
};

function Node(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}
