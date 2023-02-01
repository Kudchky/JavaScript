let cantidadNumeros = prompt("¿Cuantos numeros vas a registrar?");
const arrayNumeros = [];
let promedio;

for (i = 1; i <= cantidadNumeros; i++) {
  arrayNumeros.push(+prompt("Ingrese un numero: "));
}

promedio = arrayNumeros.reduce((acc, numActual) => acc + numActual, 0) / cantidadNumeros;

alert(`Ingresaste los numeros ${arrayNumeros.join(" ,")} y el valor promedio es: ${promedio}`);