package com.example.demo.Interface;

import com.example.demo.Modelo.AdminUser;
import org.springframework.data.repository.CrudRepository;

public interface AdminInterface extends CrudRepository<AdminUser, Integer>{
    
}
