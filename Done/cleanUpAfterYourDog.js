function crap(x, bags, cap){
let craps = 0;

for(let i = 0; i < x.length; i += 1){
  for(let j = 0; j < x[i].length; j += 1){
   if(x[i][j] === 'D') return 'Dog!!';
   if (x[i][j] === '@') craps += 1;
  }
}
  if(craps > bags * cap) return 'Cr@p';
  if(craps <= bags * cap) return 'Clean';
}