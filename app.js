const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar');
const {argv} = require('./config/yargs');
const colors = require('colors');

//let argv2 = process.argv;

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(archivo))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido'.red);
}

//console.log('Base: ', argv.base);
//console.log('Limite: ', argv.limite);

//console.log(argv2);

//console.log(base);