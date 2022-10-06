import * as mathOperations from './Modules-Math/Controller.js';
import chalk from 'chalk';

const nombre = "Gabriel";
console.log(chalk.green(nombre));


const suma = mathOperations.suma(1,2);
const multip = mathOperations.multiplica(4,5);
console.log("1 + 2 = ", suma);
console.log("4 x 5 = ",chalk.green(multip));
