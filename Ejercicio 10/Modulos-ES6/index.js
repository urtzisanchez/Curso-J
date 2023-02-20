import * as moduloController from "./Modulos/controller.js"
import chalk from 'chalk';


const sum = moduloController.suma(4, 12)
console.log(chalk.green(sum));

const multiplicacion = moduloController.multiplicacion(2, 21)
console.log(multiplicacion);

