// Un nuevo Set con los nombres de tu familia
const array = ["Mentzu", "Armando", "Nerea", "Olatz", "Erika", "Urtzi"];
const miSet = new Set(array);
console.log(miSet);


// Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
miSet.add("Urtzi");
console.log(miSet);

// Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
miSet.add("JavaScript");
console.log(miSet);

// Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const personalDetails = {
    nombre: "Urtzi",
    apellido: "Sanchez Arrillaga",
    edad: 35,
    altura: 174,
    imDeveloper: true
};

// Una variable que obtenga tu edad a partir del objeto anterior
const objs = personalDetails.edad
console.log(objs)

// Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const newList = {...personalDetails};
newList.nombre = ["Oscar", "Max"];
newList.apellido = ["Martinez", "Perez"];
newList.edad = [47, 35];
newList.altura = [171, 180];
newList.imDeveloper = [true, false];
console.log(newList);

// Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
newList.edad.sort((a, b) => a.edad - b.edad)
console.log(newList.edad);



// La fecha de hoy
const fecha = new Date();
console.log(fecha);

// La fecha de tu nacimiento
const fechaBirth = new Date (1987, 03, 16);
console.log(fechaBirth);

// Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
const fechaHoy = fecha > fechaBirth
console.log(fechaHoy);

// Una variable que contenga el día de tu nacimiento
const dayBirth = fechaBirth.getDate();
console.log(dayBirth);

// Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const monthBirth = fechaBirth.getMonth() + 1;
console.log(monthBirth);

// Una variable que contenga el año de tu nacimiento (con 4 dígitos)
const yearBirth = fechaBirth.getFullYear();
console.log(yearBirth);