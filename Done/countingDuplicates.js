function duplicateCount(text){
 
  let singlesArr = [];
  let textArr = text.toLowerCase().split('');
  let countArr = [];
  let count = 0;

  for (let i = 0; i < textArr.length; i += 1){
    if(!singlesArr.includes(textArr[i].toLowerCase())){
      singlesArr.push(textArr[i]);
    } else { countArr.push(textArr[i]) }
  }
  
  let sortArr = countArr.sort()
  
  for(let j = 0; j < sortArr.length; j += 1){
    if(sortArr[j] !== sortArr[j + 1]){
     count ++;
    }
  }
  return count;
}