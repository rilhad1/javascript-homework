let n = parseInt(prompt('Enter N'));

function fib(n){
  if ( n == 0 ) {
    return 0;
  }else if (n == 1) {
    return 1;
  }
  return fib(n-2) + fib(n-1);
}
document.write(fib(n));

// function bine(n){
//   let index = Math.pow(5, 0.5);
 
//   let left = (1 + index) / 2;
//   let right = (1 - index) / 2;
  
//   return Math.round((Math.pow(left, n) - Math.pow(right, n)) / index);
// }

// function fib2(n)
// {
//   if (n <= 2) return 1;
//   let x = 1;
//   let y = 1;
//   let res = 0;
//   for (var i = 2; i < n; i++)
//   {
//     res = x + y;
//     x = y;
//     y = res;
//   }
//   return res;
// }

// document.write(bine(n));
// document.write(fib2(n));
