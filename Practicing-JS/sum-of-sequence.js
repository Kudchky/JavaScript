const sequenceSum = (begin, end, step) => {
  // May the Force be with you
  
  // y la recursividad una vez q para regresa de derecha a izquierda los valores
  if(begin > end) return 0;
  
  let suma = 0;
  
  suma = begin + sequenceSum(begin+step, end, step);
  return suma;
};