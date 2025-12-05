package com.emplois.temps.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Enseignants {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY )
    @Column(name="id")
    private Long id;

    @Column(name="nom",nullable = false)
    private String nom;

    @Column(name = "prenom",nullable = false)
    private  String prenom;

    @Column(name = "telephone",nullable = false,unique = true)
    private  String telephone;

    @Column(name = "numeromatricule",nullable = false,unique = true)
    private String numeromatricule;

    @Column(name = "email",nullable = false,unique = true)
    private String email;



}
