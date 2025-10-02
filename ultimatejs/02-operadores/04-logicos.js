// AND (&&)
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

// OR (||)
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

// NOT (!)
console.log(!true);
console.log(!false);
console.log(!!true);
console.log(!!false);

// Example
let mayor = false;
let suscrito = true;

console.log('operador and', mayor && suscrito);

console.log('operador or', mayor || suscrito);

console.log('operador not', !mayor);

let catalogoInfantil =!mayor;

console.log('catalogo infantil', catalogoInfantil);
