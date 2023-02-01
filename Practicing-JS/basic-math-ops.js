function basicOp(operation, value1, value2)
{
  // Code
  switch(operation){
    case "+":
      resultado = value1 + value2;
      break;
    case "-":
      resultado = value1 - value2;
      break;
    case "*":
      resultado = value1 * value2;
      break;
    case "/":
      resultado = value1 / value2;
      break;
    }
  return resultado;
}