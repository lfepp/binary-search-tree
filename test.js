'use strict';

var BinaryTree = require("./");
var expect = require('chai').expect;

describe('binary tree tests =>', function() {

  it('see if the tree contains a value', function() {
    var test = new BinaryTree();
    test.addArray([7, 43, 13]);
    var test1 = test.contains(7);
    var test2 = test.contains(50);
    var test3 = test.contains(13);

    expect(test1).to.be.true;
    expect(test2).to.be.false;
    expect(test3).to.be.true;
  });

  it('adds values to the binary tree', function () {
    var test = new BinaryTree();
    test.add(7);
    test.add(43);
    test.add(13);
    test.add(27);
    test.add(82);
    test.add(2);
    test.add(19);
    test.add(8);
    test.add(1);
    test.add(92);

    expect(JSON.stringify(test)).to.equal(JSON.stringify({
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

  it('adds an array of values to the binary tree', function() {
    var test = new BinaryTree();
    test.addArray([7, 43, 13, 27, 82, 2, 19, 8, 1, 92]);
    expect(JSON.stringify(test)).to.equal(JSON.stringify({
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

  it('removes nodes from the binary tree', function() {
    var test = new BinaryTree();
    test.addArray([7, 43, 13, 27, 82, 2, 19, 8, 1, 92]);
    // Case when removing a value without any children
    test.remove(92);
    expect(JSON.stringify(test)).to.equal(JSON.stringify({
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
    test.add(92);
    // Case when removing a value with only a left child
    test.remove(27);
    expect(JSON.stringify(test)).to.equal(JSON.stringify({
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
    test.add(27);
    // Case when removing a value with only a right child
    test.remove(82);
    expect(JSON.stringify(test)).to.equal(JSON.stringify({
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
    test.add(82);
    // Case when removing a value with two children
    test.remove(43);
    expect(JSON.stringify(test)).to.equal(JSON.stringify({
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

  it('queries the size of the binary tree', function() {
    var test = new BinaryTree();
    test.addArray([7, 43, 13, 27, 82, 2, 19, 8, 1, 92]);
    expect(test.size()).to.equal(10);
});

it('queries the height of the binary tree', function() {
  var test = new BinaryTree();
  test.addArray([7, 43, 13, 27, 82, 2, 19, 8, 1, 92]);
  expect(test.height()).to.equal(4);
});

  it('queries the minimum value of the binary tree', function() {
    var test = new BinaryTree();
    test.addArray([3, 7, 9, 2, 13]);
    expect(test.min()).to.equal(2);
  });

  it('queries the maximum value of the binary tree', function() {
    var test = new BinaryTree();
    test.addArray([3, 7, 9, 2, 13]);
    expect(test.max()).to.equal(13);
  });

  it('queries for the binary tree as an array of values', function() {
    var test = new BinaryTree();
    test.addArray([7, 43, 13, 27, 82, 2, 19, 8, 1, 92]);
    expect(test.toArray()).to.deep.equal([1, 2, 7, 8, 13, 19, 27, 43, 82, 92]);
  });

  it('merges one binary tree into another binary tree', function() {
    var test1 = new BinaryTree();
    var test2 = new BinaryTree();
    test1.addArray([4, 12, 7]);
    test2.addArray([3, 9, 17]);
    test1.merge(test2);
    expect(JSON.stringify(test1)).to.equal(JSON.stringify({
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

  /*it('balnaces a binary tree', function() {

});*/

});
