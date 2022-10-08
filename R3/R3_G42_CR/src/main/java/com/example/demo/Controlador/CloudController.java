package com.example.demo.Controlador;

import com.example.demo.Modelo.Cloud;
import com.example.demo.Servicio.CloudService;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/Cloud")
public class CloudController {
    @Autowired
    private CloudService cloudService;
    
    @GetMapping("/all")
    public List<Cloud> getAll(){
         return cloudService.getAll();      
    }
    /*Para poder utilizar la URL capturando un dato y devolver la info de ese ID */
    @GetMapping("/{id}")  
    public Optional<Cloud> getCloud(@PathVariable("id") int id){
        return cloudService.getCloud(id);
    }
    
    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public Cloud save(@RequestBody Cloud cloud){
        return cloudService.save(cloud);
        
    } 
}
