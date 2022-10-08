package com.ciclo3.reto3.service;

import com.ciclo3.reto3.entities.Cloud;
import com.ciclo3.reto3.repository.CloudRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CloudService {

    @Autowired
    public CloudRepository cloudRepository;

    public List<Cloud> getAll(){return cloudRepository.getAll();}

    public Optional<Cloud> getCloud(int id){return cloudRepository.getCloud(id);}

    public Cloud save(Cloud cloud){
        if(cloud.getId()==null){
            return cloudRepository.save(cloud);
        }else{
            Optional<Cloud> e= cloudRepository.getCloud(cloud.getId());
            if (e.isEmpty()){
                return cloudRepository.save(cloud);
            }else {
                return cloud;
            }
        }
    }

    public Cloud update(Cloud uCloud){
        if(uCloud.getId()!=null){
            Optional<Cloud> e = cloudRepository.getCloud(uCloud.getId());
            if (!e.isEmpty()){
                if(uCloud.getName()!=null){
                    e.get().setName(uCloud.getName());
                }
                if(uCloud.getBrand()!=null){
                    e.get().setBrand(uCloud.getBrand());
                }
                if(uCloud.getYear()!=null){
                    e.get().setYear(uCloud.getYear());
                }
                if(uCloud.getDescription()!=null){
                    e.get().setDescription(uCloud.getDescription());
                }
                cloudRepository.save(e.get());
                return e.get();
            }else{
                return uCloud;
            }
        }else {
            return uCloud;
        }
    }

    public boolean delete(int id){
        boolean flag=false;
        Optional<Cloud> e=cloudRepository.getCloud(id);
        if(e.isPresent()){
            cloudRepository.delete(e.get());
            flag=true;
        }
        return flag;
    }

}
