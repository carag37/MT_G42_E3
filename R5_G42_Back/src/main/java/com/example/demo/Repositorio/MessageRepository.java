
package com.example.demo.Repositorio;

import com.example.demo.Interface.MessageInterface;
import com.example.demo.Modelo.Message;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository  /*defino la clase como un repositorio */
public class MessageRepository {

    @Autowired /*Permite traer métodos de otras clases o interfaces como atributos*/
    private MessageInterface extensionesCrud;

    public List<Message> getAll(){
        return (List<Message>) extensionesCrud.findAll();  /*creo un método para encontrar la tabla desde el repositorio a través de los métodos de la interface*/
    }

    public Optional<Message> getMessage(int idMessage){
        return extensionesCrud.findById(idMessage);
    }

    public Message save(Message message){
        return extensionesCrud.save(message);
    }
    
    public void deleteMessage(int id){
       extensionesCrud.deleteById(id);
    }
    
    public void deleteMessageAll(){
       extensionesCrud.deleteAll();
    }

}
