// Given a number n, find the nth element of the Fibonacci sequence

function fibonacci(num) {
    if(num < 2) {
        return num;
    }
    else {
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
}
console.log(fibonacci(7));

  

  //O(n) - iterative
  //O(2^n) - recursive