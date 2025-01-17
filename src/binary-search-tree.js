const { NotImplementedError } = require('../extensions/index.js');
const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
 class BinarySearchTree {

  constructor() {
    this.treeroot = null;
  }

  root() {
   return this.treeroot;
  }

  add(data) {
    const newNode = new Node(data);
    if (!this.treeroot) {
       this.treeroot = newNode;
       return;
    }
    let currentNode = this.treeroot; //мб в root() ?

    while (currentNode) {
      if (newNode.data < currentNode.data) { //со следующ вводимым
        if (!currentNode.left) {
          currentNode.left = newNode;
          return;
        }
        currentNode =currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return;
        }
        currentNode =currentNode.right;
      }
    }

  }

  has(data) {
    return !!this.find(data);
  }

  find(data) {
      if (!this.treeroot) {
      return null;
    }
    let arr = [this.treeroot];
    while (arr.length !== 0) {
        for (let i = 0; i<arr.length; i++) {
        if (arr[i].data == data) {
          return arr[i];
        }
      }
      let accum = [];
      for (let i = 0; i<arr.length; i++) {
        accum.push(arr[i].left);
        accum.push(arr[i].right);
      }
      arr = accum.filter(el => el!=null);
    }
   
   return null;
   
  }

  remove( data) {
    let arr = this.getArrayFromTree();

  }
  
  getArrayFromTree() {
    let resultArr = [];
    if (!this.treeroot) {
      return null;
    }
    let arr = [this.treeroot];
    while (arr.length !== 0) {
        for (let i = 0; i<arr.length; i++) {
        resultArr.push(arr[i].data);
       }
      let accum = [];
      for (let i = 0; i<arr.length; i++) {
        accum.push(arr[i].left);
        accum.push(arr[i].right);
      }
      arr = accum.filter(el => el!=null);
    }
   
   return resultArr;
  }

  min() {
    let arrForMin = this.getArrayFromTree();
    if (arrForMin !== null) {
    return arrForMin.reduce(function (p, v) {
      return ( p < v ? p : v );
    })} else {
      return null;
    }
  }

  max() {
    let arrForMin = this.getArrayFromTree();
    if (arrForMin !== null) {
    return arrForMin.reduce(function (p, v) {
      return ( p > v ? p : v );
    })} else {
      return null;
  }

}
 }

module.exports = BinarySearchTree;