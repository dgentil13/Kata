var isAnagram = function(test, original) {
  let strA = test.toLowerCase().split('');
  let strB = original.toLowerCase().split('');
  
  if (strA.sort().join('') === strB.sort().join('')){
  return true
  } else {return false}
  };
  