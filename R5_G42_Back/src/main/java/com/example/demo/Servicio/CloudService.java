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
    
    public Cloud update (Cloud cloud){
        
        if(cloud.getId()!=null){
            Optional<Cloud> cloud1 = cloudRepository.getCloud(cloud.getId());
            if(!cloud1.isEmpty()){
                if(cloud.getName()!=null){cloud1.get().setName(cloud.getName());}
                if(cloud.getBrand()!=null){cloud1.get().setBrand(cloud.getBrand());}
                if(cloud.getYear()!=null){cloud1.get().setYear(cloud.getYear());}
                if(cloud.getDescription()!=null){cloud1.get().setDescription(cloud.getDescription());}
                if(cloud.getCategory()!=null){cloud1.get().setCategory(cloud.getCategory());}
                if(cloud.getMessages()!=null){cloud1.get().setMessages(cloud.getMessages());}
                if(cloud.getReservations()!=null){cloud1.get().setReservations(cloud.getReservations());}
                cloudRepository.save(cloud1.get());
                return cloud1.get();
            } else { return cloud;}    
            } else { return cloud;}   
     }  
    
    public void deleteCloud (int id){
        Optional<Cloud> cloud1 = cloudRepository.getCloud(id);
        if(!cloud1.isEmpty()){cloudRepository.deleteCloud(id);} 
    }
    
    public void deleteCloudAll(){
        cloudRepository.deleteCloudAll();
    }
    

}
