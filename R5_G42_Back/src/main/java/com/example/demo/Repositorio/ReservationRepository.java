
package com.example.demo.Repositorio;

import com.example.demo.Interface.ReservationInterface;
import com.example.demo.Modelo.Client;
import com.example.demo.Modelo.DTOs.TotalAndClient;
import com.example.demo.Modelo.Reservation;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository  /*defino la clase como un repositorio */
public class ReservationRepository {
    @Autowired /*Permite traer métodos de otras clases o interfaces como atributos*/
    private ReservationInterface extensionesCrud;

    public List<Reservation> getAll(){
        return (List<Reservation>) extensionesCrud.findAll();  /*creo un método para encontrar la tabla desde el repositorio a través de los métodos de la interface*/
    }

    public Optional<Reservation> getReservation(int idReservation){
        return extensionesCrud.findById(idReservation);
    }

    public Reservation save(Reservation reservation){
        return extensionesCrud.save(reservation);
    }
    
    public void deleteReservation(int id){
       extensionesCrud.deleteById(id);
    }
    
    public void deleteReservationAll(){
       extensionesCrud.deleteAll();
    }
    
    public List<Reservation> getReservationsBetweenDates(Date fechaUsuarioStart, Date fechaUsuarioFin){
       return extensionesCrud.findAllByStartDateAfterAndDevolutionDateBefore(fechaUsuarioStart, fechaUsuarioFin);
    }
    
    public List<Reservation> getReservationsByStatus(String status){  
	return extensionesCrud.findAllByStatus(status);
    }

    public List<TotalAndClient> getTopClients(){

    List<TotalAndClient> respuesta = new ArrayList<>();
    List<Object[]> reporte = extensionesCrud.getTotalReservationsByClient();
    
    for(int i=0; i<reporte.size(); i++){
	respuesta.add(new TotalAndClient( (Long) reporte.get(i)[1], (Client) reporte.get(i)[0]));
    }
    return respuesta;
    }
    
    
    
}
