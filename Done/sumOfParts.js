function partsSums(ls) {
let finalArr = [];
let sum = ls.reduce((acc, item) => acc + item, 0);

finalArr.push(sum);
  for (let i = 0; i < ls.length; i += 1){
    sum -= ls[i];
    finalArr.push(sum);
  }
  return finalArr;
}
  
  