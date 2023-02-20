// Instala la dependencia Winston

// En el archivo index.js crea una función que devuelva un error con un mensaje personalizado
const miFuncion = val => {
    if (typeof val === "string" ) {
        return "hola" * val
    }
    throw new Error("El valor debe ser de tipo String")
}
console.log(miFuncion(2));

// Registra el error en un archivo a través de un try...catch

const miRegistro = val => {
    if (typeof val === "number" ) {
        return 2 * val
    }
    throw new Error("El valor debe ser de tipo número")
}
console.log(miRegistro(2));


const numero = 8;
try {
    console.log("Esta ejecutandose de manera correcta")
    const doble = miRegistro(numero);
    console.log(doble);
} catch {
    console.log("ERROR!!");
}