
package com.example.demo.Repositorio;

import com.example.demo.Interface.AdminInterface;
import com.example.demo.Modelo.AdminUser;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository  /*defino la clase como un repositorio */
public class AdminRepository {
    @Autowired /*Permite traer métodos de otras clases o interfaces como atributos*/
    private AdminInterface extensionesCrud;
    
    public List<AdminUser> getAll(){
        return (List<AdminUser>) extensionesCrud.findAll();  /*creo un método para encontrar la tabla desde el repositorio a través de los métodos de la interface*/
    }

    public Optional<AdminUser> getAdminUser(int idAdminUser){
        return extensionesCrud.findById(idAdminUser);
    }

    public AdminUser save(AdminUser adminUser){
        return extensionesCrud.save(adminUser);
    }
    
    public void deleteAdminUser(int idAdminUser){
       extensionesCrud.deleteById(idAdminUser);
    }
    
    public void deleteAdminUserAll(){
       extensionesCrud.deleteAll();
    }
}
