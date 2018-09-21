const fs = require('fs');
const colors = require('colors');

let crearArchivo = async (base, limite) => {

    if (!Number(base)) {
        throw new Error('La base introducida no es numero'.red);
    }

    let data = '';

    for (let i = 1; i <= limite; i++) {
        data += `${base} * ${i} = ${base * i}\n`;
    }

    fs.writeFile(`./tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {

        if (err) throw new Error('Error no se pudo guardar el archivo'.red);
        else return console.log(`El archivo tabla-${base}.txt ha sido creado correctamente`.green);

    });
};

let listarTabla = (base, limite) => {

    /*if (!Number(base)) {
        throw new Error('La base introducida no es numero');
    }

    if (!Number(limite)) {
        throw new Error('El limite introducido no es numero');
    }*/

    console.log('===================================='.rainbow);
    console.log(` ======== Tabla del ${base} al ${limite}========`.rainbow);
    console.log('===================================='.rainbow);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}\n`.rainbow);
    }

};

module.exports = {
    crearArchivo,
    listarTabla
};