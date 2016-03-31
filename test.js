'use strict';

var binaryTree = require("./");
var expect = require('chai').expect;

describe('binary tree tests =>', function() {

  it('see if the tree contains a value', function() {
    var test = new binaryTree();
    test.add(7);
    test.add(43);
    test.add(13);
    var test1 = test.contains(7);
    var test2 = test.contains(50);
    var test3 = test.contains(13);

    expect(test1).to.be.true;
    expect(test2).to.be.false;
    expect(test3).to.be.true;
  });

  it('adds values to the binary tree', function () {
    var test = new binaryTree();
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

  /*it('removes nodes from the binary tree', function() {

});*/

  it('queries the size of the binary tree', function() {
    var test = new binaryTree();
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
    expect(test.size()).to.equal(10);
});

  it('queries the minimum value of the binary tree', function() {
    var test = new binaryTree();
    test.add(3);
    test.add(7);
    test.add(9);
    test.add(2);
    test.add(13);
    expect(test.min()).to.equal(2);
  });

  it('queries the maximum value of the binary tree', function() {
    var test = new binaryTree();
    test.add(3);
    test.add(7);
    test.add(9);
    test.add(2);
    test.add(13);
    expect(test.max()).to.equal(13);
  });

  it('queries for the binary tree as an array of values', function() {
    var test = new binaryTree();
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
    expect(test.toArray()).to.deep.equal([1, 2, 7, 8, 13, 19, 27, 43, 82, 92]);
  });

});
