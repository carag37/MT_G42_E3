package com.ciclo3.reto3.service;

import com.ciclo3.reto3.entities.Message;
import com.ciclo3.reto3.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MessageService {

    @Autowired
    public MessageRepository messageRepository;

    public List<Message> getAll(){return messageRepository.getAll();}

    public Optional<Message> getMessage(int id){return messageRepository.getMessage(id);}

    public Message save(Message message){
        if(message.getIdMessage()==null){
            return messageRepository.save(message);
        }else{
            Optional<Message> e= messageRepository.getMessage(message.getIdMessage());
            if (e.isEmpty()){
                return messageRepository.save(message);
            }else {
                return message;
            }
        }
    }

    public Message update(Message message){
        if(message.getIdMessage()!=null){
            Optional<Message> e = messageRepository.getMessage(message.getIdMessage());
            if (!e.isEmpty()){
                if(message.getMessageText()!=null){
                    e.get().setMessageText(message.getMessageText());
                }
                if(message.getCloud()!=null){
                    e.get().setCloud(message.getCloud());
                }
                if(message.getClient()!=null){
                    e.get().setClient(message.getClient());
                }
                messageRepository.save(e.get());
                return e.get();
            }else{
                return message;
            }
        }else {
            return message;
        }
    }

    public boolean delete(int id){
        boolean flag=false;
        Optional<Message> e= messageRepository.getMessage(id);
        if(e.isPresent()){
            messageRepository.delete(e.get());
            flag=true;
        }
        return flag;
    }

}
