package com.emplois.temps.dtos;


import com.emplois.temps.models.Classes;
import com.emplois.temps.models.Cours;
import com.emplois.temps.models.Enseignants;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalTime;


@AllArgsConstructor
@Data
@NoArgsConstructor
public class EmploisDuTempsDto {


    @JsonProperty("heuredebut")
    @NotBlank(message = "Veuillez renseigner l'heure de debut ")
    @NotNull(message = "la date de début  est requis pour cette operation")
    private LocalTime heuredebut;

    @JsonProperty("heuredefin")
    @NotBlank(message = "Veuillez renseigner l' heure de fin ")
    @NotNull(message = "la date de début  est requis pour cette operation")
    private LocalTime heuredefin;


    @JsonProperty("enseignants")
    @NotNull(message = "l'id de l'enseignants est requis ")
    private Long enseignants;

    @JsonProperty("cours")
    @NotNull(message = "l'id du cours est requis ")
    private Long cours;

    @JsonProperty("classes")
    @NotNull(message = "l'id de la classes est requis ")
    private Long classes;
}
