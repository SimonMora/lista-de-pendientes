const { argv } = require('./config/yargs');
const tareas = require('./to-do/to-do');
const colors = require('colors');

let comando = argv._[0];



if( comando === 'crear'){
    
    let task = tareas.crear( argv.descripcion );
   
    console.log('generating a new shit to your shit\'s list.');

} else if( comando === 'listar' ){
    
    let list = tareas.getList();
    console.log(list);

    for(let task of list){
        console.log('=================='.green);
        console.log(task.descripcion);
        console.log(task.completed);
        console.log('=================='.green);
    }

    console.log('Making a full list of your shit.');

} else if( comando === 'actualizar' ){
 
    tareas.actualizar( argv.descripcion );
    console.log('Actualization of your shit.');

} else if( comando === 'borrar'){

    let borrado = tareas.borrar( argv.descripcion );
    console.log('Borrado:', borrado);

} else {
    console.log('Nothing to do with us, what about you?');
}