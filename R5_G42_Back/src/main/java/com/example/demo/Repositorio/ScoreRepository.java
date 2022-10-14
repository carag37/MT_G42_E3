package com.example.demo.Repositorio;

import com.example.demo.Interface.ScoreInterface;
import com.example.demo.Modelo.Score;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository  /*defino la clase como un repositorio */
public class ScoreRepository {
    @Autowired /*Permite traer métodos de otras clases o interfaces como atributos*/
    private ScoreInterface extensionesCrud;
    
    public List<Score> getAll(){
        return (List<Score>) extensionesCrud.findAll();  /*creo un método para encontrar la tabla desde el repositorio a través de los métodos de la interface*/
    }

    public Optional<Score> getScore(int idScore){
        return extensionesCrud.findById(idScore);
    }

    public Score save(Score score){
        return extensionesCrud.save(score);
    }
    
    public void deleteScore(int id){
       extensionesCrud.deleteById(id);
    }
    
    public void deleteScoreAll(){
       extensionesCrud.deleteAll();
    }
}
