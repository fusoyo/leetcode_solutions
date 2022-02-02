// fibonacci
// const foo = (n) => {
//     if (n <= 1) return 1;
//     else return n * foo(n - 1)
// }
//
// console.log(foo(5))  // O(n) time and space;

const dib = (n) => {
    if (n <= 1) return;
    console.log(n)
    dib(n - 1)
    dib(n - 1)
};

// console.log(dib(5))  // produced a tree-like output;
// height of tree --- from the root node to the leaf node, also thought as num levels;  with O(2**n) time complexity and O(n) space complexity( due to stack mechanism);


// can be applied to stair climbing problem--- iterative and recursive solutions;
const fib = (n) => {
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
}

// console.log(fib(7))


//memorization --- store
// js object, keys will be arg  to fn, value will be return val;

const memoFib = (n, memo = {}) => {
    if (n in memo) return memo[n];
    if (n <= 2) return 1;
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];

}

// console.log(memoFib(7))


//----------------------------------------------------------------------------------------------------------------------
// grid traveler. (0,1) (1,0) mean empty grid; (3,3) means from (0,0) moves to (3,3);  more like tree sum problem.
const gridTraveler = (m, n) => {
    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;

    return gridTraveler(m - 1, n) + gridTraveler(m, n - 1)
}
//brute force: O(2**(n+m)) time, O(n+m) space;
// console.log(gridTraveler(3,3))
// console.log(gridTraveler(3,2))  //3
// console.log(gridTraveler(2,3))  //3
// console.log(gridTraveler(18,18))

// cuz the duplicate of the subtree, so make a memo, which enhances the efficiency;
const gridTravelerMemo = (m, n, memo = {}) => {
    const key = m + ',' + n;
    if (key in memo) return memo[key]
    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;

    memo[key] = gridTravelerMemo(m - 1, n, memo) + gridTravelerMemo(m, n - 1, memo);
    return memo[key]

}
//memorized O(m*n) time, o(n+m) space.
// console.log(gridTravelerMemo(3, 2))  //3
// console.log(gridTravelerMemo(18,18))  // faster than the above one
// memorization recipe
// dynamic programming problem ---  1. make it work( visualize the problem as tree; implement the tree using recursion; test it) ; 2.make it efficient(add a memo object; add a base case to return memo values ; store return values into the memo)



