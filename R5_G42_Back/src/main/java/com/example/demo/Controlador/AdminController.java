package com.example.demo.Controlador;

import com.example.demo.Modelo.AdminUser;
import com.example.demo.Servicio.AdminService;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST,RequestMethod.PUT,RequestMethod.DELETE})
@RequestMapping("/api/Admin")
public class AdminController {
    @Autowired
    private AdminService adminService;
    
    @GetMapping("/all")
    public List<AdminUser> getAll(){
         return adminService.getAll();      
    }
    /*Para poder utilizar la URL capturando un dato y devolver la info de ese ID*/
    @GetMapping("/{id}")
    public Optional<AdminUser> getAdminUser(@PathVariable("id") int id){
        return adminService.getAdminUser(id);
    }
    
    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public AdminUser save(@RequestBody AdminUser adminUser){
        return adminService.save(adminUser);
        
    }
    
    @PutMapping("/update")
    @ResponseStatus(HttpStatus.CREATED)
    public AdminUser update(@RequestBody AdminUser adminUser){
        return adminService.update(adminUser);
        
    }
    
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteCategory(@PathVariable("id") int id){
        adminService.deleteAdminUser(id);
    }
    
    @DeleteMapping("/all")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteAdminUserAll(){
        adminService.deleteAdminUserAll();
    }
}
