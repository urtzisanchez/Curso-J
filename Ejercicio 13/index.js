
// 1- Una cadena de texto con tu Nombre
let name = "Urtzi "
// 2- Otra cadena de texto con tu Apellido
let surname = "Sanchez Arrillaga"
var student = name.concat(surname)
// 3- Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
console.log(name.concat(surname))
// 4- Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúscula
let studentMys = "estudianteMayus"
console.log(studentMys.toUpperCase())
// 5- Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
let studentMns = "estudianteMinus"
console.log(studentMns.toLowerCase())
// 6- Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
console.log(student.length)
// 7- Una variable que contenga la primera letra del Nombre
console.log(name.startsWith("U"))
// 8- Otra variable que contenga la última letra del Apellido
console.log(surname.endsWith("a"))
// 9- Una cadena de texto que elimine los espacios de la variable "estudiante"
console.log(name.trim().length)
// 10- Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
console.log(surname.includes("Arrillaga"))