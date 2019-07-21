function reOrdering(text){
 const newArr = [];
  
  text.split(' ').map((e) => {
    if(e.charAt(0) === e.charAt(0).toUpperCase()){
      newArr.unshift(e)
    } else { newArr.push(e)}
  })
  
  return newArr.join(' ');
}