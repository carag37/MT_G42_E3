
package com.example.demo.Servicio;

import com.example.demo.Modelo.Category;
import com.example.demo.Repositorio.CategoryRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service /*Defino la clase como servicio */
public class CategoryService {
@Autowired
    private CategoryRepository categoryRepository;

    public List<Category> getAll(){
        return categoryRepository.getAll();
    }

    public Optional<Category> getCategory(int id){
        return categoryRepository.getCategory(id);
    }
    
    public Category save (Category category){
        if(category.getId() == null){  
            return categoryRepository.save(category);
        }else {
            Optional<Category> category1 = categoryRepository.getCategory(category.getId());
            if(category1.isEmpty()){
                return categoryRepository.save(category);
            } else {
                return category;
            }

        }
   } 
    
    public Category update (Category category){
        
        if(category.getId()!=null){
            Optional<Category> category1 = categoryRepository.getCategory(category.getId());
            if(!category1.isEmpty()){
                if(category.getName()!=null){category1.get().setName(category.getName());}
                if(category.getDescription()!=null){category1.get().setDescription(category.getDescription());}
                if(category.getClouds()!=null){category1.get().setClouds(category.getClouds());}
                categoryRepository.save(category1.get());
                return category1.get();
            } else { return category;}    
            } else { return category;}
            
        }
    
    public void deleteCategory (int id){
        Optional<Category> category1 = categoryRepository.getCategory(id);
        if(!category1.isEmpty()){categoryRepository.deleteCategory(id);} 
    }
    
    public void deleteCategoryAll(){
        categoryRepository.deleteCategoryAll();      
    }
    
}
