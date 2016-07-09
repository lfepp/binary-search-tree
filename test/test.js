'use strict';

import BinaryTree from "../src/core.js";
import {expect} from "chai";

describe('binary tree tests =>', () => {

  it('see if the tree contains a value', () => {
    let tree = new BinaryTree();
    tree.addArray([7, 43, 13]);

    expect(tree.contains(7)).to.be.true;
    expect(tree.contains(50)).to.be.false;
    expect(tree.contains(13)).to.be.true;
  });

  it('adds values to the binary tree', () => {
    let tree = new BinaryTree();
    tree.add(7);
    tree.add(43);
    tree.add(13);
    tree.add(27);
    tree.add(82);
    tree.add(2);
    tree.add(19);
    tree.add(8);
    tree.add(1);
    tree.add(92);

    expect(JSON.stringify(tree)).to.equal(JSON.stringify({
      root:
       { value: 7,
         left:
          { value: 2,
            left: { value: 1, left: null, right: null },
            right: null },
         right:
          { value: 43,
            left:
             { value: 13,
               left: { value: 8, left: null, right: null },
               right:
                { value: 27,
                  left: { value: 19, left: null, right: null },
                  right: null } },
            right:
             { value: 82,
               left: null,
               right: { value: 92, left: null, right: null } } } }
    }));
  });

  it('adds an array of values to the binary tree', () => {
    let tree = new BinaryTree();
    tree.addArray([7, 43, 13, 27, 82, 2, 19, 8, 1, 92]);
    expect(JSON.stringify(tree)).to.equal(JSON.stringify({
      root:
       { value: 7,
         left:
          { value: 2,
            left: { value: 1, left: null, right: null },
            right: null },
         right:
          { value: 43,
            left:
             { value: 13,
               left: { value: 8, left: null, right: null },
               right:
                { value: 27,
                  left: { value: 19, left: null, right: null },
                  right: null } },
            right:
             { value: 82,
               left: null,
               right: { value: 92, left: null, right: null } } } }
    }));
});

  it('removes nodes from the binary tree', () => {
    let tree = new BinaryTree();
    tree.addArray([7, 43, 13, 27, 82, 2, 19, 8, 1, 92]);
    // Case when removing a value without any children
    tree.remove(92);
    expect(JSON.stringify(tree)).to.equal(JSON.stringify({
      root:
       { value: 7,
         left:
          { value: 2,
            left: { value: 1, left: null, right: null },
            right: null },
         right:
          { value: 43,
            left:
             { value: 13,
               left: { value: 8, left: null, right: null },
               right:
                { value: 27,
                  left: { value: 19, left: null, right: null },
                  right: null } },
            right:
             { value: 82,
               left: null,
               right: null } } }
    }));
    tree.add(92);
    // Case when removing a value with only a left child
    tree.remove(27);
    expect(JSON.stringify(tree)).to.equal(JSON.stringify({
      root:
       { value: 7,
         left:
          { value: 2,
            left: { value: 1, left: null, right: null },
            right: null },
         right:
          { value: 43,
            left:
             { value: 13,
               left: { value: 8, left: null, right: null },
               right:
                { value: 19,
                  left: null,
                  right: null } },
            right:
             { value: 82,
               left: null,
               right: { value: 92, left: null, right: null } } } }
    }));
    tree.add(27);
    // Case when removing a value with only a right child
    tree.remove(82);
    expect(JSON.stringify(tree)).to.equal(JSON.stringify({
      root:
       { value: 7,
         left:
          { value: 2,
            left: { value: 1, left: null, right: null },
            right: null },
         right:
          { value: 43,
            left:
             { value: 13,
               left: { value: 8, left: null, right: null },
               right:
                { value: 19,
                  left: null,
                  right: { value: 27, left: null, right: null } } },
            right:
             { value: 92,
               left: null,
               right: null } } }
    }));
    tree.add(82);
    // Case when removing a value with two children
    tree.remove(43);
    expect(JSON.stringify(tree)).to.equal(JSON.stringify({
      root:
       { value: 7,
         left:
          { value: 2,
            left: { value: 1, left: null, right: null },
            right: null },
         right:
          { value: 92,
            left:
            { value: 82,
              left:
              { value: 13,
                left: { value: 8, left: null, right: null },
                right:
                 { value: 19,
                   left: null,
                   right: { value: 27, left: null, right: null } } },
              right: null },
            right: null } }
    }));
});

  it('queries the size of the binary tree', () => {
    let tree = new BinaryTree();
    tree.addArray([7, 43, 13, 27, 82, 2, 19, 8, 1, 92]);
    expect(tree.size()).to.equal(10);
});

it('queries the height of the binary tree', () => {
  let tree = new BinaryTree();
  tree.addArray([7, 43, 13, 27, 82, 2, 19, 8, 1, 92]);
  expect(tree.height()).to.equal(4);
});

  it('queries the minimum value of the binary tree', () => {
    let tree = new BinaryTree();
    tree.addArray([3, 7, 9, 2, 13]);
    expect(tree.min()).to.equal(2);
  });

  it('queries the maximum value of the binary tree', () => {
    let tree = new BinaryTree();
    tree.addArray([3, 7, 9, 2, 13]);
    expect(tree.max()).to.equal(13);
  });

  it('queries for the binary tree as an array of values', () => {
    let tree = new BinaryTree();
    tree.addArray([7, 43, 13, 27, 82, 2, 19, 8, 1, 92]);
    expect(tree.toArray()).to.deep.equal([1, 2, 7, 8, 13, 19, 27, 43, 82, 92]);
  });

  it('merges one binary tree into another binary tree', () => {
    let tree1 = new BinaryTree();
    let tree2 = new BinaryTree();
    tree1.addArray([4, 12, 7]);
    tree2.addArray([3, 9, 17]);
    tree1.merge(tree2);
    expect(JSON.stringify(tree1)).to.equal(JSON.stringify({
      root:
      { value: 4,
        left: { value: 3, left: null, right: null },
        right:
        { value: 12,
          left:
          { value: 7,
            left: null,
            right: { value: 9, left: null, right: null } },
          right: { value: 17, left: null, right: null } } }
    }));
});

  it('balances a binary tree', () => {
    let tree = new BinaryTree();
    tree.addArray([7, 43, 13, 27, 82, 2, 19, 8, 1, 92]);
    tree.balance();
    expect(JSON.stringify(tree)).to.equal(JSON.stringify({
      root:
        { value: 13,
          left:
            { value: 2,
              left: { value: 1, left: null, right: null },
              right:
                { value: 8,
                  left: { value: 7, left: null, right: null },
                  right: null } },
          right:
            { value: 43,
              left:
                { value: 27,
                  left: { value: 19, left: null, right: null },
                  right: null },
              right:
                { value: 92,
                  left: { value: 82, left: null, right: null },
                  right: null } } }
    }));
});

});
