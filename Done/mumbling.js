function accum(s) {
  let strArr = [];
  
  for(let i = 0; i < s.length; i += 1){  
      strArr.push(s[i].toUpperCase() + s[i].repeat(i).toLowerCase());
  }
  
  return strArr.join('-')
}