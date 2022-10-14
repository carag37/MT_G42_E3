
package com.example.demo.Interface;

import com.example.demo.Modelo.Reservation;
import java.util.Date;
import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface ReservationInterface extends CrudRepository<Reservation, Integer>{
    
public List<Reservation> findAllByStartDateAfterAndDevolutionDateBefore(Date fechaUsuarioStart, Date fechaUsuarioFin);  
public List<Reservation> findAllByStatus(String status);

@Query("SELECT c.client, COUNT(c.client) FROM Reservation AS c GROUP BY c.client ORDER BY COUNT(c.client) DESC")
public List<Object[]> getTotalReservationsByClient();

}
