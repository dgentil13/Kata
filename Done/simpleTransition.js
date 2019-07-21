function simpleTransposition(text) {
 let strOne = '';
 let strTwo = '';

  for(let i = 0; i < text.length; i += 1){
    if(i % 2 === 0){
      strOne += text[i];
    } else { strTwo += text[i]}
  }
  
  return strOne + strTwo;
}