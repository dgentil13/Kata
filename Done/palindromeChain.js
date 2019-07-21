var palindromeChainLength = function(n) {
  let number = parseInt(n.toString().split('').reverse().join(''));
  let sum = 0;
  let counter = 0;
  let original = n;
  
   while(number !== original){
          sum = number + original;
          original = sum;
          number = parseInt(sum.toString().split('').reverse().join(''))
          counter += 1;
    }
    return counter;

};