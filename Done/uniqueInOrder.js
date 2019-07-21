var uniqueInOrder=function(iterable){
  let unique = [];
  
  for(let i = 0; i< iterable.length; i += 1){
    if(iterable[i] !== iterable[i + 1]){
      unique.push(iterable[i]);
    }
  }
  return unique
}