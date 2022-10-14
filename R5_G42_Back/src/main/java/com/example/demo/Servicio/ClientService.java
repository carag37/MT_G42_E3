
package com.example.demo.Servicio;

import com.example.demo.Modelo.Client;
import com.example.demo.Repositorio.ClientRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service /*Defino la clase como servicio */
public class ClientService {
    @Autowired
    private ClientRepository clientRepository;

    public List<Client> getAll(){
        return clientRepository.getAll();
    }

    public Optional<Client> getClient(int id){
        return clientRepository.getClient(id);
    }
    
    public Client save (Client client){
        if(client.getIdClient() == null){  
            return clientRepository.save(client);
        }else {
            Optional<Client> client1 = clientRepository.getClient(client.getIdClient());
            if(client1.isEmpty()){
                return clientRepository.save(client);
            } else {
                return client;
            }

        }
    }
    
    public Client update (Client client){
        
        if(client.getIdClient()!=null){
            Optional<Client> client1 = clientRepository.getClient(client.getIdClient());
            if(!client1.isEmpty()){
                /*if(client.getEmail()!=null){client1.get().setEmail(client.getEmail());}*/
                if(client.getPassword()!=null){client1.get().setPassword(client.getPassword());}
                if(client.getName()!=null){client1.get().setName(client.getName());}
                if(client.getAge()!=null){client1.get().setAge(client.getAge());}
                if(client.getMessages()!=null){client1.get().setMessages(client.getMessages());}
                if(client.getReservations()!=null){client1.get().setReservations(client.getReservations());}
                
                clientRepository.save(client1.get());
                return client1.get();
            } else { return client;}    
            } else { return client;}
            
        }
    
    public void deleteClient (int id){
        Optional<Client> client1 = clientRepository.getClient(id);
        if(!client1.isEmpty()){
            if(client1.get().getMessages().isEmpty()){
                if(client1.get().getReservations().isEmpty()){                
                    {clientRepository.deleteClient(id);} 
                }
            }
        }
    }
    
    
    
    public void deleteClientAll(){
        clientRepository.deleteClientAll();
    }
        
}
