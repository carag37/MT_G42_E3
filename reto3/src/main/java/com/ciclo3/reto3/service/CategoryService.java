package com.ciclo3.reto3.service;

import com.ciclo3.reto3.entities.Category;
import com.ciclo3.reto3.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryService {

    @Autowired
    public CategoryRepository categoryRepository;

    public List<Category> getAll(){
        return categoryRepository.getAll();}

    public Optional<Category> getCategory(int id){
        return categoryRepository.getCategory(id);}

    public Category save(Category category){
        if(category.getId()==null){
            return categoryRepository.save(category);
        }else{
            Optional<Category> e= categoryRepository.getCategory(category.getId());
            if (e.isEmpty()){
                return categoryRepository.save(category);
            }else {
                return category;
            }
        }
    }

    public Category update(Category category){
        if(category.getId()!=null){
            Optional<Category> e = categoryRepository.getCategory(category.getId());
            if (!e.isEmpty()){
                if(category.getName()!=null){
                    e.get().setName(category.getName());
                }
                if(category.getDescription()!=null){
                    e.get().setDescription(category.getDescription());
                }
                categoryRepository.save(e.get());
                return e.get();
            }else{
                return category;
            }
        }else {
            return category;
        }
    }

    public boolean delete(int id){
        boolean flag=false;
        Optional<Category> e= categoryRepository.getCategory(id);
        if(e.isPresent()){
            categoryRepository.delete(e.get());
            flag=true;
        }
        return flag;
    }

}
