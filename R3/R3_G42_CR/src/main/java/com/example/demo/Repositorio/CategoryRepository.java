
package com.example.demo.Repositorio;

import com.example.demo.Interface.CategoryInterface;
import com.example.demo.Modelo.Category;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository  /*defino la clase como un repositorio */
public class CategoryRepository {
    
    @Autowired /*Permite traer métodos de otras clases o interfaces como atributos*/
    private CategoryInterface extensionesCrud;

    public List<Category> getAll(){
        return (List<Category>) extensionesCrud.findAll();  /*creo un método para encontrar la tabla desde el repositorio a través de los métodos de la interface*/
    }

    public Optional<Category> getCategory(int id){
        return extensionesCrud.findById(id);
    }

    public Category save(Category category){
        return extensionesCrud.save(category);
    }
    
}
