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
// grid traveler.
