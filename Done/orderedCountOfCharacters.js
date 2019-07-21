var orderedCount = function (text) {
  
  const arr = [];
  const b = {};
  let textArr = text.split('');

  textArr.forEach( element => {
    if(arr.includes(element) === false){  
      arr.push(element)
    }
    if(b[element]){
      b[element] += 1;
    } else {
      b[element] = 1;
    }
    
  });

 return arr.map( e => [e, b[e]]);
}