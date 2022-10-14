package com.example.demo.Modelo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
/*Se deben agregar los paquetes donde genere falla */

@Entity  /*declara la clase como una tabla */
@Table(name = "message") /* Definir y nombra una tabla */
public class Message {
   
   @Id                                                     /*representa clave primaria sencilla */
   @GeneratedValue(strategy = GenerationType.IDENTITY)    /*Genera valores automáticos para las llaves de tablas. Autoincremental por lo del paréntesis */
   private Integer idMessage;                                    /* Atributos de la tabla con sus tipos */
   private String messageText;
    
   @ManyToOne
    @JoinColumn(name = "CloudId")
    @JsonIgnoreProperties({"messages", "reservations"})
    private Cloud cloud;
   
   @ManyToOne
    @JoinColumn(name = "ClientId")
    @JsonIgnoreProperties({"messages", "reservations"})
    private Client client;
   
   
    /* INSERTAR LOS GETTER Y SETTER - Click derecho insert code, getter and setter, seleccionar todos y generar*/  

    public Integer getIdMessage() {
        return idMessage;
    }

    public void setIdMessage(Integer idMessage) {
        this.idMessage = idMessage;
    }

    public String getMessageText() {
        return messageText;
    }

    public void setMessageText(String messageText) {
        this.messageText = messageText;
    }

    public Cloud getCloud() {
        return cloud;
    }

    public void setCloud(Cloud cloud) {
        this.cloud = cloud;
    }

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }


   
}
