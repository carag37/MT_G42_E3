
package com.example.demo.Repositorio;

import com.example.demo.Interface.ClientInterface;
import com.example.demo.Modelo.Client;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository  /*defino la clase como un repositorio */
public class ClientRepository {

    @Autowired /*Permite traer métodos de otras clases o interfaces como atributos*/
    private ClientInterface extensionesCrud;

    public List<Client> getAll(){
        return (List<Client>) extensionesCrud.findAll();  /*creo un método para encontrar la tabla desde el repositorio a través de los métodos de la interface*/
    }

    public Optional<Client> getClient(int idClient){
        return extensionesCrud.findById(idClient);
    }

    public Client save(Client client){
        return extensionesCrud.save(client);
    }
    
    public void deleteClient(int id){
       extensionesCrud.deleteById(id);
    }
    
    public void deleteClientAll(){
       extensionesCrud.deleteAll();
    }
    
}
