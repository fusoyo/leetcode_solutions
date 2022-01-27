class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

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
    while(queue.length){
        const current = queue.shift();
        values.push(current.val);
        if(current.left!==null)queue.push(current.left);
        if(current.right!==null)queue.push(current.right);
    }
    return values;
}





// ---------------------------------------------------------------------------------------------------------------------

console.log(breadthFirstValues(a))