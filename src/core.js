'use strict';

class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

export default class BinaryTree {

  // Constructor
  constructor() {
    this.root = null;
  }

  // Method to see if tree contains a value
  contains(val) {
    let currentNode = this.root;
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
  }

  // Add node method
  add(val) {
    let root = this.root;
    // Set root
    if(!root) {
      this.root = new Node(val);
      return;
    }
    let currentNode = root;
    let newNode = new Node(val);
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
  } // add method

  // Add an array of values
  addArray(arr) {
    for(let i=0; i<arr.length; i++) {
      if(!arr[i]) {
        throw new Error('Your array contained a null value');
      }
      else {
        this.add(arr[i]);
      }
    }
  } // addArray method

  // Remove node method
  remove(val, currentNode) {
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
        let temp = currentNode.left;
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
  } // remove method

  // Get size method
  size() {
    let output = 0;
    this.traverse((currentNode) => {
      output++;
    });
    return output;
  } // size method

  // Get height method
  height(currentNode) {
    // Default currentNode to root
    currentNode = currentNode || this.root;
    var heightRight = -1;
    var heightLeft = -1;
    if(currentNode.right) {
      heightRight = this.height(currentNode.right);
    }
    if(currentNode.left) {
      heightLeft = this.height(currentNode.left);
    }
    if(heightRight > heightLeft) {
      heightRight++;
      return heightRight;
    }
    else {
      heightLeft++;
      return heightLeft;
    }
  } // height method

  // Get min value
  min() {
    let currentNode = this.root;
    // Case for no root
    if(!currentNode) {
      throw new Error('This tree does not yet contain any values');
      return;
    }
    while(currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.value;
  } // min method

  // Get max value
  max() {
    let currentNode = this.root;
    // Case for no root
    if(!currentNode) {
      throw new Error('This tree does not yet contain any values');
      return;
    }
    while(currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode.value;
  } // max method

  // Get sorted array of values
  toArray() {
    let arr = [];
    this.traverse((currentNode) => {
      arr.push(currentNode.value);
    });
    return arr;
  } // toArray method

  // Merge another binary tree into this one
  merge(tree) {
    let arr = tree.toArray();
    for(let i=0; i<arr.length; i++) {
      this.add(arr[i]);
    }
  } // merge method

  // Balace the binary search tree
  balance() {
      // Helper function to find median
      function median(arr) {
        if(arr.length % 2 === 0) {
          return Math.floor(arr.length / 2) - 1;
        }
        else {
          return Math.floor(arr.length / 2);
        }
      }
      // Helper function to recursively balance half the tree
      function balanceSide(currentNode, arr) {
        if(arr.length === 1) {
          var node = new Node(arr[0]);
          currentNode = node;
        }
        else if(arr.length === 2) {
          var node = new Node(arr[1]);
          var left = new Node(arr[0]);
          currentNode = node;
          currentNode.left = left;
        }
        else {
          var mid = median(arr);
          var node = new Node(arr[mid]);
          node.left = balanceSide(node.left, arr.slice(0, mid));
          node.right = balanceSide(node.right, arr.slice(mid + 1));
          currentNode = node;
        }
        return currentNode;
      }

      let arr = this.toArray();
      let mid = median(arr);
      let root = new Node(arr[mid]);
      root.left = balanceSide(root.left, arr.slice(0, mid));
      root.right = balanceSide(root.right, arr.slice(mid + 1))
      this.root = root;
  } // balance method

  // Helper traverse method for size() and toArray()
  traverse(method) {
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
    }
  } // traverse method
};
