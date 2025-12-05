package com.emplois.temps.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;


@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Matieres {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY )
    @Column(name="id")
    private Long id;

    @Column(name="intitule",unique=true)
    private String intitule;

    @Column(name="code",unique=true)
    private String code;
}
