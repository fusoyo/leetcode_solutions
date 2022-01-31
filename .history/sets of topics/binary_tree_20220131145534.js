class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// console.log(a)
// ---------------------------------------------------------------------------------------------------------------------
// const depthFirtstValues = (root) => {
//     if(root===null){
//         return [];
//     }
//
//     const stack = [root];
//     const result = []
//     while (stack.length > 0) {
//     //    iterraron;
//         const current = stack.pop();
//         result.push(current.val);
//         //in the below order, based on stack, the right will be added first
//         // if(current.left)stack.push(current.left);
//         // if(current.right)stack.push(current.right);
//
//         //in the below order, based on stack, the left will be added first
//         if(current.right)stack.push(current.right);
//         if(current.left)stack.push(current.left);
//     }
//     return result;
//
// }

// the recursive version;
// const depthFirtstValues = (root) => {
//     if (root === null) {
//         return [];
//     }
//
//     const leftVals = depthFirtstValues(root.left);
//     console.log(leftVals)
//     const rightVals = depthFirtstValues(root.right);
//     console.log(rightVals)
//     return [root.val, ...leftVals, ...rightVals] //use the spread operator to merge them all
//
// }
//
// console.log(depthFirtstValues(a))

// ---------------------------------------------------------------------------------------------------------------------
// breadth first values;
const breadthFirstValues = (root) => {
  if (root === null) {
    return [];
  }
  const queue = [root]; //fifo; lilo;
  const values = [];
  while (queue.length) {
    const current = queue.shift();
    values.push(current.val);
    if (current.left !== null) queue.push(current.left);
    if (current.right !== null) queue.push(current.right);
  }
  return values;
};

// console.log(breadthFirstValues(a))

// ---------------------------------------------------------------------------------------------------------------------
// use the or on the both right and left subtree to check whether a tree includes a number or not;
const treeIncludes = (root, target) => {
  //method1 --- a recursive method;
  // if (root===null) return false; // when root is null, return false
  // if (root.val===target)return true;  // if root.val equals to target, return true
  // return treeIncludes(root.left,target) || treeIncludes(root.right,target)  // logic or;

  //method2 --- breath first seach
  if (root === null) return false;
  const queue = [root];

  while (queue.length) {
    let current = queue.shift();
    if (current.val === target) return true;
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return false;
};

// console.log(treeIncludes(a, 'g'))

//---------------------------------------------------------------------------------------------------------------------
// tree-sum problem.

const treeSum = (root, sumSet = {}) => {
  if (root === null) return 0; // when root is null, return
  const stack = [root];
  let sum = 0;
  while (stack.length) {
    curr = stack.pop();
    if (curr) {
      sum = sum + curr.val;
    } else {
      sum = sum + 0;
    }
    if (curr.left) stack.push(curr.left);
    if (curr.right) stack.push(curr.right);
  }
  return sum;
};

const h = new Node(3);
const i = new Node(11);
const j = new Node(4);
const k = new Node(4);
const l = new Node(2);
const m = new Node(1);

h.left = i;
h.right = j;
i.left = k;
b.right = l;
j.right = m;
console.log(treeSum(h));
