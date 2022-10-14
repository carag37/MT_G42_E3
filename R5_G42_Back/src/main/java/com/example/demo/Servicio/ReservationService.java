
package com.example.demo.Servicio;

import com.example.demo.Modelo.DTOs.CompletedAndCancelled;
import com.example.demo.Modelo.DTOs.TotalAndClient;
import com.example.demo.Modelo.Reservation;
import com.example.demo.Repositorio.ReservationRepository;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service /*Defino la clase como servicio */
public class ReservationService {
    @Autowired
    private ReservationRepository reservationRepository;

    public List<Reservation> getAll(){
        return reservationRepository.getAll();
    }

    public Optional<Reservation> getReservation(int id){
        return reservationRepository.getReservation(id);
    }
    
    public Reservation save (Reservation reservation){
        if(reservation.getIdReservation() == null){  
            return reservationRepository.save(reservation);
        }else {
            Optional<Reservation> reservation1 = reservationRepository.getReservation(reservation.getIdReservation());
            if(reservation1.isEmpty()){
                return reservationRepository.save(reservation);
            } else {
                return reservation;
            }

        }
   }
    
    public Reservation update (Reservation reservation){
        
        if(reservation.getIdReservation()!=null){
            Optional<Reservation> reservation1 = reservationRepository.getReservation(reservation.getIdReservation());
            if(!reservation1.isEmpty()){
            if(reservation.getDevolutionDate().compareTo(reservation.getStartDate())>0){    
                if(reservation.getStartDate()!=null){reservation1.get().setStartDate(reservation.getStartDate());}
                if(reservation.getDevolutionDate()!=null){reservation1.get().setDevolutionDate(reservation.getDevolutionDate());}                 
                if(reservation.getStatus()!=null){reservation1.get().setStatus(reservation.getStatus());}
                /*if(reservation.getCloud()!=null){reservation1.get().setCloud(reservation.getCloud());}*/
                if(reservation.getScore()!=null){reservation1.get().setScore(reservation.getScore());}
                
                reservationRepository.save(reservation1.get());
                return reservation1.get();
            } else { return reservation;}  
            } else { return reservation;}    
            } else { return reservation;}
            
    }
    
    public void deleteReservation (int id){
        Optional<Reservation> reservation1 = reservationRepository.getReservation(id);
        if(!reservation1.isEmpty()){reservationRepository.deleteReservation(id);} 
    }
    
    public void deleteReservationAll(){
        reservationRepository.deleteReservationAll();
    }
    
    public List<Reservation> getReservationsBetweenDatesReport(String fechaStart, String fechaDev){
    
        SimpleDateFormat parser = new SimpleDateFormat("yyyy-MM-dd");
        Date a = new Date();
        Date b = new Date();
        try{
        a = parser.parse(fechaStart);
        b = parser.parse(fechaDev);
        }catch(ParseException exception){
                exception.printStackTrace();
        }
        if(a.before(b)){
                return reservationRepository.getReservationsBetweenDates(a, b);
        }else{
                return new ArrayList<>();
         }  
    }
    
    public CompletedAndCancelled getReservationStatusReport(){
        List<Reservation> completed = reservationRepository.getReservationsByStatus("completed");
        List<Reservation> cancelled = reservationRepository.getReservationsByStatus("cancelled");

        return new CompletedAndCancelled((long) completed.size(), (long)  cancelled.size());
    
    }
    
    public List<TotalAndClient> getTopClientsReport(){ 
        
        return reservationRepository.getTopClients();
        
    }
    
    
}
