const isSquare = (n) => {
  return n < 0 
          ? false
          : n === 0
            ? true
            : Math.sqrt(n) % 1 === 0
              ? true 
              : false 
}