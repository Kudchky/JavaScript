const objConcat=(arreglo)=> {
  let resultado = {};
 
  for(let elemento of arreglo){
    for(let key in elemento){
      resultado[key]=elemento[key]
    }
  }
  return resultado;
}

function objConcat(array){
  let resultado={};
  Object.assign(resultado, ...array);
  return resultado;
}

Es un método en el objeto Object de JavaScript que es utilizado 
para combinar objetos o para copiar los valores de un objeto a otro.
Object.assign(dest, src1, ..., srcN)

Si los objetos fuente tienen propiedades con el mismo nombre, 
las propiedades de los objetos fuente más recientes sobreescribirán 
a las de los objetos fuente anteriores