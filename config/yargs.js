const argv = require('yargs')
.options({
    'b': {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la operacion'
    },
    'l': {
        alias: 'list',
        type: 'boolean',
        default: false,
        describe: 'Es la lista de resultados de la operacion'
    },
    'lm': {
        alias: 'limite',
        type: 'number',
        describe: 'Es el maximo de operaciones a realizar',
        demandOption: true,
    }
})
.check((argv, options) => {
    if(isNaN(argv.b)){
        throw 'La base debe ser un numero';
    }
    return true;
})
.check((argv, options) => {
    if(isNaN(argv.lm)){
        throw 'El limite debe ser un numero';
    }
    return true;
})
.argv;

module.exports = argv;