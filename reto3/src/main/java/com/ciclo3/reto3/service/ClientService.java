package com.ciclo3.reto3.service;

import com.ciclo3.reto3.entities.Client;
import com.ciclo3.reto3.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClientService {
    @Autowired
    public ClientRepository clientRepository;

    public List<Client> getAll(){return clientRepository.getAll();}

    public Optional<Client> getClient(int id){return clientRepository.getClient(id);}

    public Client save(Client client){
        if(client.getIdClient()==null){
            return clientRepository.save(client);
        }else{
            Optional<Client> e= clientRepository.getClient(client.getIdClient());
            if (e.isEmpty()){
                return clientRepository.save(client);
            }else {
                return client;
            }
        }
    }

    public Client update(Client client){
        if(client.getIdClient()!=null){
            Optional<Client> e = clientRepository.getClient(client.getIdClient());
            if (!e.isEmpty()){
                if(client.getName()!=null){
                    e.get().setName(client.getName());
                }
                if(client.getPassword()!=null){
                    e.get().setPassword(client.getPassword());
                }
                if(client.getAge()!=null){
                    e.get().setAge(client.getAge());
                }
                clientRepository.save(e.get());
                return e.get();
            }else{
                return client;
            }
        }else {
            return client;
        }
    }

    public boolean delete(int id){
        boolean flag=false;
        Optional<Client> e= clientRepository.getClient(id);
        if(e.isPresent()){
            clientRepository.delete(e.get());
            flag=true;
        }
        return flag;
    }

}

