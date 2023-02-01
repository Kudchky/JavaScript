function boredom(staff){
  let suma = 0;
  const departments = {
    accounts: 1,
    finance: 2,
    canteen: 10,
    regulation: 3,
    trading: 6,
    change: 6,
    IS: 8,
    retail: 5,
    cleaning: 4,
    'pissing about': 25,
  }
  for (let key in staff){
    suma += departments[staff[key]];
  }
  return suma <= 80 ? 'kill me now' 
         : suma > 80 && suma < 100 ? 'i can handle this'
          : 'party time!!'
}