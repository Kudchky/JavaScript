function deepCount(a){
  //...
  if (a.length === 0) return 0;
  let suma = 0;
  
  for (let elemento of a){
    suma = suma + 1 + (Array.isArray(elemento) ? deepCount(elemento) : 0)
    }
  return suma;
}