// Una clase llamada "Estudiante" que tenga:
// Una variable llamada nombre
// Otra variable lista llamada asignaturas con 3 asignaturas: Javascript, HTML, CSS
// Un método "obtenDatos" que devuelva un objeto con las propiedades nombre y asignaturas
// Crea una nueva instancia de "Estudiante"
// Haz la llamada al método obtenDatos

// {"Javascript", "HTML", "CSS"},
class Estudiante {
    nombre;
    asignaturas; 
    constructor(nombre, asignaturas) {
        this.nombre = nombre
        this.asignaturas = ("Javascript, HTML y CSS")

    }
    obtenDatos() {
        console.log(`Hola mi nombre es ${this.nombre} y estudio estos lenjuajes ${this.asignaturas}`);
    }
}
const nuevo_estudiante = new Estudiante("Urtzi", `${this.asignaturas}`);
nuevo_estudiante.obtenDatos()