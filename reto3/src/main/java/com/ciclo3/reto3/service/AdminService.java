package com.ciclo3.reto3.service;

import com.ciclo3.reto3.entities.Admin;
import com.ciclo3.reto3.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AdminService {

    @Autowired
    public AdminRepository adminRepository;

    public List<Admin> getAll(){return adminRepository.getAll();}

    public Optional<Admin> getAdmin(int id){return adminRepository.getAdmin(id);}

    public Admin save(Admin admin){
        if(admin.getIdAdmin()==null){
            return adminRepository.save(admin);
        }else{
            Optional<Admin> e= adminRepository.getAdmin(admin.getIdAdmin());
            if (e.isEmpty()){
                return adminRepository.save(admin);
            }else {
                return admin;
            }
        }
    }

    public Admin update(Admin admin){
        if(admin.getIdAdmin()!=null){
            Optional<Admin> e = adminRepository.getAdmin(admin.getIdAdmin());
            if (!e.isEmpty()){
                if(admin.getName()!=null){
                    e.get().setName(admin.getName());
                }
                if(admin.getEmail()!=null){
                    e.get().setEmail(admin.getEmail());
                }
                if(admin.getPassword()!=null){
                    e.get().setPassword(admin.getPassword());
                }
                adminRepository.save(e.get());
                return e.get();
            }else{
                return admin;
            }
        }else {
            return admin;
        }
    }

    public boolean delete(int id){
        boolean flag=false;
        Optional<Admin> e= adminRepository.getAdmin(id);
        if(e.isPresent()){
            adminRepository.delete(e.get());
            flag=true;
        }
        return flag;
    }

}
