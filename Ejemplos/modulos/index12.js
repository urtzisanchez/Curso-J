/ón

const persona = {
    nombre: "Urtzi",
    edad: "35"
}

console.log(persona);

function obtenDobleEdad(edad){
    return 2 * edad
}

const dobleEdad = obtenDobleEdad(persona.edad)
console.log(dobleEdad);

function obtenArray(edad){
    let array = []
    for (let i = 0; i < 10; i++){
       const numero = edad + 1
       console.log(numero);
       array = [...array, numero]
    }
    return array
}

const arrayNumeros = obtenArray(persona.edad)
console.log(arrayNumeros);