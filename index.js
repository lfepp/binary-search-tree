'use strict';

module.exports = BinaryTree;

BinaryTree.prototype = {

  // Constructor
  constructor: BinaryTree,

  // Method to see if tree contains a value
  contains: function(val) {
    var currentNode = this.root;
    // Case for no root
    if(!currentNode) {
      throw new Error('This tree does not yet contain any values');
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
    }
  }, // add method

  // Add an array of values
  addArray: function(arr) {
    for(var i=0; i<arr.length; i++) {
      if(!arr[i]) {
        throw new Error('Your array contained a null value');
      }
      else {
        this.add(arr[i]);
      };
    };
  }, // addArray method

  // Remove node method
  remove: function(val, currentNode) {
    // Recursive left node helper function
    function left(currentNode, append) {
      if(currentNode.left) {
        currentNode.left = left(currentNode.left, append);
      }
      else {
        currentNode.left = append;
      }
      return currentNode;
    }
    // Default the currentNode variable to this.root
    currentNode = currentNode || this.root;
    // Throw error if there is no root
    if(!currentNode) {
      throw new Error ('This tree does not yet contain any values');
    }
    if(val === currentNode.value) {
      if(!currentNode.left && !currentNode.right) {
        currentNode = null;
      }
      else if(currentNode.left && !currentNode.right) {
        currentNode = currentNode.left;
      }
      else if(!currentNode.left && currentNode.right) {
        currentNode = currentNode.right;
      }
      else {
        var temp = currentNode.left;
        currentNode = currentNode.right;
        currentNode.left = left(currentNode.left, temp);
      }
    }
    else if(val < currentNode.value) {
      currentNode.left = this.remove(val, currentNode.left);
    }
    else {
      currentNode.right = this.remove(val, currentNode.right);
    }
    return currentNode;
  }, // remove method

  // Get size method
  size: function() {
    var output = 0;
    this.traverse(function(currentNode) {
      output++;
    });
    return output;
  }, // size method

  // Get height method
  height: function() {

  }, // height method

  // Get min value
  min: function() {
    var currentNode = this.root;
    // Case for no root
    if(!currentNode) {
      throw new Error('This tree does not yet contain any values');
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
      throw new Error('This tree does not yet contain any values');
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

  // Merge another binary tree into this one
  merge: function(tree) {

  }, // merge method

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

function BinaryTree() {
  this.root = null;
};

function Node(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}
