package com.emplois.temps.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Classes {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY )
    @Column(name="id")
    private Long id;

    @Column(name="intitule",unique=true,nullable = false)
    private String intitule;

    @Column(name="code",unique=true,nullable = false)
    private String code;
}
