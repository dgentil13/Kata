function isPowerOfTwo(n){  
 if(n === 0 ){
    return false;
    }
    
     if(n === 1 ){
    return true;
    }
    
  const divide = (number) => number < 10 ? number : divide(number / 2)
  return divide(n) % 2 === 0
  }