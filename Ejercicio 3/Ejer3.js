// Ejercicio del bucle for (Este archivo debe calcular el factorial de 10 utilizando un solo bucle for)
for (let i = 0; i < 10; i++){
    console.log(i);
}
// Ejercicio del bucle while (Este archivo debe calcular el factorial de 10 utilizando un bucle while)
let min = 0;
let max = 10;
while (min < max) {
console.log(min);
min++
}

// Ejercicio del bucle break/switch (Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break)
let nota = 2
switch (nota) {
    case 5:
        console.log("Enhorabuena, has sacado un sobresaliente");
        break;
    case 4:
        console.log("Un notable, no esta mal pero te has quedado muy cerca");
        break;
    case 3:
        console.log("has aprobado muy raspado");
        break;
    case 2:
        console.log("Has suspendido por muy poco");
        break;
    case 1:
        console.log("Madre mía, no has dado ni una");
        break;
    default:
        console.log("Error, no desbaries y añade tu nota real");
        break;
}