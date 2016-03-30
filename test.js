'use strict';

var binaryTree = require("./");
var expect = require('chai').expect;

describe('binary tree tests', function() {

  /*it('see if the tree contains a value', function() {
    var test = new binaryTree();
    test.add(7);
    test.add(43);
    test.add(13);

    expect()
  });*/

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

});
