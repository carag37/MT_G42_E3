package com.ciclo3.reto3.controller;

import com.ciclo3.reto3.entities.Cloud;
import com.ciclo3.reto3.service.CloudService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/Cloud")
public class CloudController {

    @Autowired
    private CloudService cloudService;
    @GetMapping("/all")
    public List<Cloud> getCloud(){
        return cloudService.getAll();
    }

    @GetMapping("/{id}")
    public Optional<Cloud> getCloud(@PathVariable("id") int cloudId){
        return cloudService.getCloud(cloudId);
    }

    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public Cloud save(@RequestBody Cloud cloud){
        return cloudService.save(cloud);
    }


}
