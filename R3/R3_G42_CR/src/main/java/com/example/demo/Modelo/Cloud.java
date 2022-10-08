package com.example.demo.Modelo;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity  /*declara la clase como una tabla */
@Table(name = "cloud") /* Definir y nombra una tabla */
public class Cloud {
    @Id                                                     /*representa clave primaria sencilla */
    @GeneratedValue(strategy = GenerationType.IDENTITY)    /*Genera valores automáticos para las llaves de tablas. Autoincremental por lo del paréntesis */
    private Integer id;                                    /* Atributos de la tabla con sus tipos */
    private String name;
    private String brand;
    private Integer year;
    private String description;

    /*Relación uno a muchos se deben agregar las columnas que se deban traer con JoinColumn*/
    @ManyToOne
    @JoinColumn(name = "categoryId")
    @JsonIgnoreProperties("clouds")
    private Category category;
    
    @OneToMany(cascade = {CascadeType.PERSIST}, mappedBy = "cloud")
    @JsonIgnoreProperties({"cloud","client"})
    private List<Message> messages;
    
    @OneToMany(cascade = {CascadeType.PERSIST}, mappedBy = "cloud")
    @JsonIgnoreProperties({"cloud", "messages"})
    private List<Reservation> reservations;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public Integer getYear() {
        return year;
    }

    public void setYear(Integer year) {
        this.year = year;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public List<Message> getMessages() {
        return messages;
    }

    public void setMessages(List<Message> messages) {
        this.messages = messages;
    }

    public List<Reservation> getReservations() {
        return reservations;
    }

    public void setReservations(List<Reservation> reservations) {
        this.reservations = reservations;
    }
    
    
    
        
}
