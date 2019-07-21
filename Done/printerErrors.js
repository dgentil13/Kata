function printerError(s) {
  let counter = 0;
  
  for ( let i = 0; i < s.length; i += 1){
      if(s[i] > 'm'){
      counter++;
      }
   }
   
  return (`${counter}/${s.length}`); 
  }