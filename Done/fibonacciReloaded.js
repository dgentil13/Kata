function fib(n) {
 let a = 0;
 let b = 1;
 
for(let i = 1; i < n; i += 1){
  let sum = a;
  a = b;
  b += sum;
}  
 return a;
}