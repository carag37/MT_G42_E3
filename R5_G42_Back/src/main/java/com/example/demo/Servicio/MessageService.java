
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
    
    public Message update (Message message){
        
        if(message.getIdMessage()!=null){
            Optional<Message> message1 = messageRepository.getMessage(message.getIdMessage());
            if(!message1.isEmpty()){
                if(message.getMessageText()!=null){message1.get().setMessageText(message.getMessageText());}
                if(message.getCloud()!=null){message1.get().setCloud(message.getCloud());}
                if(message.getClient()!=null){message1.get().setClient(message.getClient());}
                messageRepository.save(message1.get());
                return message1.get();
            } else { return message;}    
            } else { return message;}
            
    }
    
    public void deleteMessage (int id){
        Optional<Message> message1 = messageRepository.getMessage(id);
        if(!message1.isEmpty()){messageRepository.deleteMessage(id);} 
    }
    
    public void deleteMessageAll(){
        messageRepository.deleteMessageAll();
    }
}
