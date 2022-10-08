package com.example.demo.Servicio;

import com.example.demo.Modelo.Cloud;
import com.example.demo.Repositorio.CloudRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service /*Defino la clase como servicio */
public class CloudService {
    @Autowired
    private CloudRepository cloudRepository;

    public List<Cloud> getAll(){
        return cloudRepository.getAll();
    }

    public Optional<Cloud> getCloud(int id){
        return cloudRepository.getCloud(id);
    }
    
    public Cloud save (Cloud cloud){
        if(cloud.getId() == null){  
            return cloudRepository.save(cloud);
        }else {
            Optional<Cloud> cloud1 = cloudRepository.getCloud(cloud.getId());
            if(cloud1.isEmpty()){
                return cloudRepository.save(cloud);
            } else {
                return cloud;
            }

        }


    }  
}
