const argv = require('yargs')
                        .command('crear','crea una tarea pendiente.',{
                            descripcion:{
                                demand: true,
                                alias: 'd',
                                desc: 'describe las tareas.'
                            }    
                        })
                        .command('listar','lista las tareas y su estado.')
                        .command('actualizar','cambia el estado de las tareas.',{
                            descripcion:{
                                demand: true,
                                alias: 'd',
                                desc: 'describe las tareas.'
                            },
                            change: {
                                default: true,
                                alias: 'c',
                                desc: 'cambia el estado.'
                            }
                        }).command('borrar','permite eliminar una tarea',{
                            descripcion:{
                                demand: true,
                                alias: 'd',
                                desc: 'describe las tareas.'
                            }
                        }).help().argv;

module.exports = { argv };