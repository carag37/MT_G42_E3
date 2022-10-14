
package com.example.demo.Repositorio;

import com.example.demo.Interface.CloudInterface;
import com.example.demo.Modelo.Cloud;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository  /*defino la clase como un repositorio */
public class CloudRepository {
    @Autowired /*Permite traer métodos de otras clases o interfaces como atributos*/
    private CloudInterface extensionesCrud;

    public List<Cloud> getAll(){
        return (List<Cloud>) extensionesCrud.findAll();  /*creo un método para encontrar la tabla desde el repositorio a través de los métodos de la interface*/
    }

    public Optional<Cloud> getCloud(int idCloud){
        return extensionesCrud.findById(idCloud);
    }

    public Cloud save(Cloud cloud){
        return extensionesCrud.save(cloud);
    }
    
    public void deleteCloud(int id){
       extensionesCrud.deleteById(id);
    }
    
    public void deleteCloudAll(){
       extensionesCrud.deleteAll();
    }

}
