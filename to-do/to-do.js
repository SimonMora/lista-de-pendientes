const fs = require('fs');

let listToDo = [];

const subscribe = () =>{

    let data = JSON.stringify(listToDo);

    fs.writeFile("./db/to-do.json", data , (err)=>{
        console.log(`${err} \n`);
    });
}

const loadDb = () =>{
    try{
        listToDo = require('../db/to-do.json');
    } catch(err){
        listToDo = [];
    }
}

const findById = () => {

}

const getList = () =>{
    loadDb();
    return listToDo;
}

const actualizar = (descripcion) => {

    loadDb();
    
    try{

        let actualizable = listToDo.find(task => descripcion === task.descripcion );
        console.log(actualizable);
        let index = listToDo.indexOf(actualizable); 
        actualizable.completed = true;
        listToDo[index] = actualizable;
        subscribe();

    } catch(err){

        throw new Error("Nothing to change.");

    }

}

const crear = (descripcion) =>{

    let toDo = {
        descripcion,
        completed: false
    };

    loadDb();

    listToDo.push(toDo);
    
    subscribe();

    return toDo;

}

const borrar = ( descripcion ) => {
   
    loadDb();

    try{
        
        let borrable = listToDo.find(task => descripcion === task.descripcion );
       
        let index = listToDo.indexOf(borrable);
       
        let borrado = listToDo.splice(index,1);
        
        subscribe();
        return borrado;

    }catch(err){
        
        console.log("Nothing with that description to delete.");

    }
}

module.exports = { crear, getList, actualizar, borrar };
