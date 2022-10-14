
package com.example.demo.Servicio;

import com.example.demo.Modelo.AdminUser;
import com.example.demo.Repositorio.AdminRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service /*Defino la clase como servicio */
public class AdminService {
    @Autowired
    private AdminRepository adminRepository;
    
    public List<AdminUser> getAll(){
        return adminRepository.getAll();
    }

    public Optional<AdminUser> getAdminUser(int id){
        return adminRepository.getAdminUser(id);
    }
    
    public AdminUser save (AdminUser adminUser){
        if(adminUser.getIdAdmin() == null){  
            return adminRepository.save(adminUser);
        }else {
            Optional<AdminUser> adminUser1 = adminRepository.getAdminUser(adminUser.getIdAdmin());
            if(adminUser1.isEmpty()){
                return adminRepository.save(adminUser);
            } else {
                return adminUser;
            }

        }
    }
    
    public AdminUser update (AdminUser adminUser){
        
        if(adminUser.getIdAdmin()!=null){
            Optional<AdminUser> adminUser1 = adminRepository.getAdminUser(adminUser.getIdAdmin());
            if(!adminUser1.isEmpty()){
                if(adminUser.getEmail()!=null){adminUser1.get().setEmail(adminUser.getEmail());}
                if(adminUser.getPassword()!=null){adminUser1.get().setPassword(adminUser.getPassword());}
                if(adminUser.getName()!=null){adminUser1.get().setName(adminUser.getName());}
                adminRepository.save(adminUser1.get());
                return adminUser1.get();
            } else { return adminUser;}    
            } else { return adminUser;}
            
    }
    
    public void deleteAdminUser (int id){
        Optional<AdminUser> adminUser1 = adminRepository.getAdminUser(id);
        if(!adminUser1.isEmpty()){adminRepository.deleteAdminUser(id);} 
    }
    
    public void deleteAdminUserAll(){
        adminRepository.deleteAdminUserAll();
    }
    
}
