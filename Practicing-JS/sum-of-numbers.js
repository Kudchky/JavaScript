const getSum = (a, b) => {
  let varInitial = a < b ? a : b;
  let varFinal = a > b ? a : b;
  let suma = 0;
  
  for ( i = varInitial; i <= varFinal; i++){ suma += i;}
  return suma;
}