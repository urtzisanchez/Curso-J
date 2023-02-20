// Una variable que contenga la lista de la compra (mínimo 5 elementos)
let listaCompra = ["Leche", "Cafe", "Platanos", "Atun", "Salmon"];
console.log(listaCompra);

// Modifica la lista de la compra y añádele "Aceite de Girasol"
listaCompra.push("Aceite de girasol");
console.log(listaCompra);

// Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
listaCompra.pop();
console.log(listaCompra);

// Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const listaPeliculas = [{titulo: "The beach", director: "Danny Boyle", fecha: new Date(2002, 0, 1)}, {titulo: "Into the Wild", director: "Sean Penn", fecha: new Date(2011, 0, 1)}, {titulo: "seven pounds", director: "Gabriele Muccino", fecha: new Date(2008, 0 ,1)}];
console.log(listaPeliculas);

// Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
let mv = [{titulo: "The beach", fecha: 2000}, {titulo: "Interstellar", fecha: 2014}, {titulo: "Arrival", fecha: 2016}];
const movies = mv.filter(obj => obj.fecha > 2010);
console.log(movies);

// Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const directores1 = listaPeliculas.map(obj => obj.director);
console.log(directores1);

// Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const ls_peliculas = listaPeliculas.map(obj => obj.titulo);
console.log(ls_peliculas);

// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const peliculasNuevas = listaPeliculas.filter(pelicula => pelicula.fecha > new Date(2010, 0 ,1))
    const directores = listaPeliculas.map(pelicula => {
        return pelicula.director
    }) 
    const titulos = listaPeliculas.map(pelicula => {
        return pelicula.titulo
    }) 
    const directores_titulos = directores.concat(titulos)
    const directores_titulos_prop = [...directores, ...titulos]
    console.log(directores_titulos_prop);

// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const propagacion = [...director, ...title];
console.log(propagacion);