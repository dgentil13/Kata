function meeting(s) {
    let nameArr = s.split(';')
    let newArr = [];
    
    for (let i = 0; i < nameArr.length; i += 1){
      newArr.push(nameArr[i].toUpperCase().split(':').reverse().join(', '));
    }
    let str = newArr.sort().join(')(')
    return '(' + str + ')'
}