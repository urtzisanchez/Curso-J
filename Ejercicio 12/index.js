// Una función que admita un parámetro "num", y devuelva una lista con esa cantidad de números de la secuencia de Fibonacci (Por ejemplo: num = 6 => Resultado [1, 1, 2, 3, 5, 8])
// Ejecuta la depuración de VSCode para visualizar la ejecución de la función

const num = 1;

function obtenNumero(num){
    let listaNumeros = []
    for (let i = 0; i < 10; i++){
       const numero = num + 2
       num++
       console.log(numero);
       listaNumeros = [...listaNumeros, numero]
    }
    return listaNumeros
}

const resultado = obtenNumero(num);
console.log(resultado)