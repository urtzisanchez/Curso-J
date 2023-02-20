// Una función sin parámetros que devuelva siempre "true"
function sinParametros(devolver = true){
    console.log(devolver);
    }
    sinParametros()

// Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
const miPromesa = new Promise((resolve, reject) => {
    if (true) {
        resolve()
        //setTimeout(() => {console.log("Hola soy una promesa")}, 5000);
    } else {
        reject()
    }
})

miPromesa
.then(setTimeout(() => {console.log("Hola soy una promesa")}, 5000))
.catch(() => console.log("Error"))
.finally(() => console.log("Soy el final"))

// Una función generadora de índices pares automáticos

function* pares() {
    let id = 0;
    while(true) {
        id += 2
        if (id === 10) {
            return id
        }
        yield id
    }
}
const num = pares();

console.log(num.next().value)
console.log(num.next().value)
console.log(num.next().value)
console.log(num.next().value)
console.log(num.next().value)
console.log(num.next().value)