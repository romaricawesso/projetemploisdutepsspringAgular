package com.emplois.temps.dtos;

import com.emplois.temps.models.AnnéeScolaire;
import com.emplois.temps.models.Classes;
import com.emplois.temps.models.Enseignants;
import com.emplois.temps.models.Matieres;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@NoArgsConstructor
@AllArgsConstructor
@Data
public class CoursDto {


    @JsonProperty("matieres")
    @NotNull(message = "l'id de matieres est requis ")
    private Long matieres;

    @JsonProperty("classes")
    @NotNull(message = "l'id de la classes est requis ")
    private Long classes;

    @JsonProperty("annéeScolaire")
    @NotNull(message = "l'id du pipelineState est requis ")
    private Long annéeScolaire;

    @JsonProperty("enseignants")
    @NotNull(message = "l'id de l'enseignants est requis ")
    private Long enseignants;

}
