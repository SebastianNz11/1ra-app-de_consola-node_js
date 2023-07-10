const fs = require('fs');
const colors = require('colors');



const crearArchivo = async (base = 1, listar, limite) => {

    try {

        let salida = '';

        for (let i = 1; i <= limite; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
        };

        if (listar) {
            console.clear();
            console.log('=============='.green)
            console.log('TABLA DEL:'.bgBlue, base);
            console.log('=============='.green)
            console.log(salida.cyan);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)
        return `Tabla del ${base} creado`;
    } catch (err) {
        throw err;
    }
};

module.exports = {
    crearArchivo
};