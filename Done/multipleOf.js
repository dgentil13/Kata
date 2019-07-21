function solution(number) {
  const numArr = [];
  for (let i = 0; i < number; i += 1) {
    if ( i % 3 === 0 || i % 5 === 0) {
      numArr.push(i);
    }
  }
  if(numArr.length === 0){
    return 0;
  }
  return numArr.reduce((a, b) => a + b);
}