package com.emplois.temps.models;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalTime;

@Entity
@AllArgsConstructor
@Data
@NoArgsConstructor
public class EmploisDuTemps {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY )
    @Column(name="id")
    private Long id;

    private String heuredebut;

    private String heuredefin;

    @ManyToOne
    private Enseignants enseignants;

    @ManyToOne
    private Cours cours;

    @ManyToOne
    private Classes classes;

}
