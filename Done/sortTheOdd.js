function sortArray(array) {
  orderedArr = [];
  array.forEach(element => {
    if(element % 2 !== 0){
      orderedArr.push(element)
    }
    orderedArr.sort((a, b) =>
    {
      return a - b;
    })
  });

  for(let i = 0; i < array.length; i += 1){
    if(array[i] % 2 === 0){
      orderedArr.splice(i, 0, array[i]);
    }
  }
  return orderedArr
}