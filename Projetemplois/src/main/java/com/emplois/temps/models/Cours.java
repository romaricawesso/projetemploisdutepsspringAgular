package com.emplois.temps.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Cours {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY )
    @Column(name="id")
    private Long id;

    @ManyToOne
    private  Matieres matieres;

    @ManyToOne
    private Classes classes;

    @ManyToOne
    private AnnéeScolaire annéeScolaire;

    @ManyToOne
    private Enseignants enseignants;

}
