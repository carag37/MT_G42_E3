package com.ciclo3.reto3.service;

import com.ciclo3.reto3.entities.Reservation;
import com.ciclo3.reto3.repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReservationService {

    @Autowired
    public ReservationRepository reservationRepository;

    public List<Reservation> getAll(){return reservationRepository.getAll();}

    public Optional<Reservation> getReservation(int id){return reservationRepository.getReservation(id);}


    public Reservation save(Reservation reservation){
        if(reservation.getIdReservation()==null){
            return reservationRepository.save(reservation);
        }else{
            Optional<Reservation> e= reservationRepository.getReservation(reservation.getIdReservation());
            if (e.isEmpty()){
                return reservationRepository.save(reservation);
            }else {
                return reservation;
            }
        }
    }

    public Reservation update(Reservation reservation){
        if(reservation.getIdReservation()!=null){
            Optional<Reservation> e = reservationRepository.getReservation(reservation.getIdReservation());
            if (!e.isEmpty()){
                if(reservation.getStartDate()!=null){
                    e.get().setStartDate(reservation.getStartDate());
                }
                if(reservation.getDevolutionDate()!=null){
                    e.get().setDevolutionDate(reservation.getDevolutionDate());
                }
                if(reservation.getStatus()!=null){
                    e.get().setStatus(reservation.getStatus());
                }
                if(reservation.getCloud()!=null){
                    e.get().setCloud(reservation.getCloud());
                }
                if(reservation.getClient()!=null){
                    e.get().setClient(reservation.getClient());
                }
                if(reservation.getScore()!=null){
                    e.get().setScore(reservation.getScore());
                }
                reservationRepository.save(e.get());
                return e.get();
            }else{
                return reservation;
            }
        }else {
            return reservation;
        }
    }

    public boolean delete(int id){
        boolean flag=false;
        Optional<Reservation> e= reservationRepository.getReservation(id);
        if(e.isPresent()){
            reservationRepository.delete(e.get());
            flag=true;
        }
        return flag;
    }


}