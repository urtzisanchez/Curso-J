const boton = document.querySelector(".btn")
const boton1 = document.querySelector("#info")

// Evento Jquery que te pregunta si quieres utilizar Jquery
boton.addEventListener("click", () => {
   //alert("se ha hecho click")
   confirm("Hola, ¿Quieres utilizar jQuery?")
   ? console.log("Si lo estoy utilizando")
   : console.log("NO, lo estoy utilizando!!")
})


// Evento Jquery para crear un boton que obtendra info
const botonInfo = document.querySelector("#info")
   botonInfo.addEventListener("click", () => {
    const nombre = prompt("¿Cuál es tu nombre?")
    const edad = prompt("¿Cuál es tu edad?")
    if (nombre) {
        console.log("Tu nombre es " + nombre)
    } else {
        console.log("No has introducido nada")
    }
    if (edad) {
        console.log("Tu edad es " + edad)
    } else {
        console.log("No has introducido nada")
    }
   })


// Evento Jquery para crear una tabla ordenada
   const lista = [{
    nombre: "Oscar",
    edad: 47
   },{
    nombre: "Urtzi",
    edad: 35
   },{
    nombre: "PacoPorras",
    edad: 80
   }]
console.table(lista)


// Evento Jquery para ocultar o no el Head
$(() => {
    $(".show-btn").click(() => {
        $("h1").fadeIn()
    })
    $(".hiden-btn").click(() => {
        $("h1").fadeOut()
    })
})