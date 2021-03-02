const argv = require('./config/yargs').argv;
const color = require('colors');

//1 forma es traer la clase entera
//const multiplicar =require('./multiplicar/multiplicar');

//otra forma es destructurando con {}
//dentro de llaves pongo lo que puse en exports de multiplicar

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');


let comando = argv._[0]

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(archivo => console.log(archivo))
            .catch(e => console.log(e));
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(color.green(`Archivo creado:`) + color.red(`${archivo}`)))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
}