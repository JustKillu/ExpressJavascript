const {clientes} = require("../models/clientModels");

class clientesController {
    
    check(){
      console.log('Todos los clientes: ')
      return clientes;
    }
  
    new(newclient){
      clientes.push(newclient);
      console.log("Se ha creado un nuevo cliente y se regresara la lista de los clientes: ");
      return (clientes);
    }
  
  
    search(searchID){
      var id = + searchID;
      var search = clientes.findIndex(u => u.id == id)
      var res = "id: " + id + " pertenece a:  " + clientes[search].nombre;
      return(res);
    }
  
  
    update(searchID , newclient){
      var id = + searchID;
      var search = clientes.findIndex(u => u.id == id)
      if (search == "-1" ){
        console.log("El id que ha colocado: " + id + "No esta en la base de datos");
      }else if(clientes[search].id == id){ 
        console.log("El cliente con la id:  "+ id + "sera actualizado");
        console.log(clientes[search]);
        clientes[search]= newclient;
        console.log("El cliente ha sido actualizado");
        console.log(clientes[search]);
      }
    }
  
    delete(searchID){
      var id = + searchID;
      var search = clientes.findIndex(u => u.id == id)
      if (search == "-1" ){
        console.log("El id que ha colocado: " + id + "No esta en la base de datos");
      }else if(clientes[search].id == id){
        console.log("El id que ha colocado: " + id + "Ha sido elimnado.");
        clientes.splice(search,1);
      }
    }
  } 
  
  module.exports = new clientesController();