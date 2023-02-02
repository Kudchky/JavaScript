function likes(names=[]) {
  // TODO
  
  let [a, b, c, d] = names;
  switch(names.length){
    case 0: return `no one likes this`
    case 1: return `${a} likes this`;
    case 2: return `${a} and ${b} like this`;
    case 3: return `${a}, ${b} and ${c} like this`;
    default: return `${a}, ${b} and ${names.length - 2} others like this`;
  }
}

function likes(names=[]) {
  
  let [a, b, c, d] = names;
  const like ={
    0: `no one likes this`,
    1: `${a} likes this`,
    2: `${a} and ${b} like this`,
    3: `${a}, ${b} and ${c} like this`,
    4: `${a}, ${b} and ${names.length - 2} others like this`,
  }
  
  return like[names.length > 4 ? 4 : names.length]
}