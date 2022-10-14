
package com.example.demo.Servicio;

import com.example.demo.Modelo.Score;
import com.example.demo.Repositorio.ScoreRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service /*Defino la clase como servicio */
public class ScoreService {
    @Autowired
    private ScoreRepository scoreRepository;
    
    public List<Score> getAll(){
        return scoreRepository.getAll();
    }

    public Optional<Score> getScore(int id){
        return scoreRepository.getScore(id);
    }
    
    public Score save (Score score){
        if(score.getIdScore() == null){  
            return scoreRepository.save(score);
        }else {
            Optional<Score> score1 = scoreRepository.getScore(score.getIdScore());
            if(score1.isEmpty()){
                return scoreRepository.save(score);
            } else {
                return score;
            }

        }
    }
    
    public Score update (Score score){
        
        if(score.getIdScore()!=null){
            Optional<Score> score1 = scoreRepository.getScore(score.getIdScore());
            if(!score1.isEmpty()){
                if(score.getScoreText()!=null){score1.get().setScoreText(score.getScoreText());}
                if(score.getScore()!=null){score1.get().setScore(score.getScore());}
                scoreRepository.save(score1.get());
                return score1.get();
            } else { return score;}    
            } else { return score;}
            
    }
    
    public void deleteScore (int id){
        Optional<Score> score1 = scoreRepository.getScore(id);
        if(!score1.isEmpty()){scoreRepository.deleteScore(id);} 
    }
    
    public void deleteScoreAll(){
        scoreRepository.deleteScoreAll();
    }
}
