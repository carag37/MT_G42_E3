
package com.example.demo.Servicio;

import com.example.demo.Modelo.Message;
import com.example.demo.Repositorio.MessageRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service /*Defino la clase como servicio */
public class MessageService {
    @Autowired
    private MessageRepository messageRepository;

    public List<Message> getAll(){
        return messageRepository.getAll();
    }

    public Optional<Message> getMessage(int id){
        return messageRepository.getMessage(id);
    }
    
    public Message save (Message message){
        if(message.getIdMessage() == null){  
            return messageRepository.save(message);
        }else {
            Optional<Message> message1 = messageRepository.getMessage(message.getIdMessage());
            if(message1.isEmpty()){
                return messageRepository.save(message);
            } else {
                return message;
            }

        }


    }
}
