var countSheep = function (num){
  let sheep = "";

  for (let i = 1; i <= num ; i+=1){
    sheep += `${i} sheep...`;
  }
   return sheep;
}