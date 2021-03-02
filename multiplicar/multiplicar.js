const fs = require('fs');
const color = require('colors');
//const fs = require('express'); --> libreria externa para node
//const fs = require('../'); -->propios archivos que importamos

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {

        console.log('==================='.green);
        console.log(`tabla de ${base}`.green);
        console.log('==================='.green);

        if (!Number(base)) {
            reject(`Base: El valor introducido ${base} no es un número`);
            return;
        }

        if (!Number(limite)) {
            reject(`Límite: El valor introducido ${limite} no es un número`);
            return;
        }

        let tabla = '';

        for (let i = 1; i <= limite; i++) {
            tabla += `${base} * ${i} = ${base*i}\n`;
        }

        resolve(tabla);
    });
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        let tabla = '';

        for (let i = 1; i <= limite; i++) {
            tabla += `${base} * ${i} = ${base*i}\n`;
        }

        const data = new Uint8Array(Buffer.from(tabla));
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`);

        });
    });
}

//modulo es un objeto global que está siendo utilizando durante toda la app
module.exports = {
    crearArchivo,
    listarTabla
}