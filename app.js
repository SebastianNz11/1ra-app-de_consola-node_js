
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs')

console.clear();
console.log(argv)

crearArchivo(argv.b, argv.l, argv.lm)
.then( nombreArchivo => console.log(nombreArchivo, 'creado'))
.catch(err => console.log(err));
