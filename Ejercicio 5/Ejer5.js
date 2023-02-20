

// Una variable que contenga tu altura en centímetros (entero)
 let hight = 174.4;
console.log(parseInt(hight));

// Una variable que contenga tu altura en metros (número de coma flotante)
let hight2 = 1.74;
console.log(parseFloat(hight2));
 
// Una variable que contenga tu peso en kilogramos (número de coma flotante)
let weight = 73.7;
console.log(weight.toFixed(2));
 
// Una variable que contenga tu altura en metros redondeada hacia arriba
let hight3 = 1.74;
console.log(Math.round(hight3));
 
// Una variable que contenga tu peso en kilogramos redondeado hacia abajo
let weight2 = 73.7;
console.log(Math.floor(weight2));
 
// Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
let max_valor_js = Number.MAX_VALUE;
let max_valor = Number.MAX_VALUE + 1;

if (max_valor_js <= max_valor) {
    console.log(`El número es distinto al ${max_valor}`);
} else {
    console.log(`El número es igual a ${max_valor}`);
}

/*
var numero1 = 1.79E+307;
var numero2 = 1.79E+310;
function verificarValorMaximo(num){

  if (num <= Number.MAX_VALUE) {
    console.log("El número no es infinito");
  } else {
    console.log("El número es infinito");
  }
}
verificarValorMaximo(numero1); // El número no es infinito
verificarValorMaximo(numero2); // El número es infinito
*/