# Binary Search Tree

NodeJS module to implement a binary search tree

## Usage

### Installation

```
npm install node-binary-search-tree --save
```

### Usage

Create a new tree

```
var BinaryTree = require('node-binary-search-tree');
var tree = new BinaryTree();
```

Determine if the tree contains a value
*Returns a boolean value*

```
tree.contains(9);
```

Add a single value to a tree

```
tree.add(1);
tree.add(23);
tree.add(17);
```

Add an array of values to a tree

```
tree.addArray([1, 14, 25, 6, 19]);
```

Remove a value from a tree

```
tree.remove(16);
```

Get the size of the tree

```
tree.size();
```

Get the minimum value in the tree

```
tree.min();
```

Get the maximum value in the tree

```
tree.max();
```

Get a sorted array of the tree's values

```
tree.toArray();
```

Merge one tree into another

```
tree1.merge(tree2);
```

Balance the tree

```
tree.balance();
```

## Testing and releasing

### Test command

```
npm test
```

### Release script

```
./release.sh
```

## Author

Luke Epp <lucasfepp@gmail.com>
