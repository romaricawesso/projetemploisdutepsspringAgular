package com.emplois.temps.dtos;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class EnseignantsDto {

    @JsonProperty("nom")
    @NotBlank(message = "Veuillez renseigner le nom ")
    @NotNull(message = "le nom est requis pour cette operation")
    private String nom;

    @JsonProperty("prenom")
    @NotBlank(message = "Veuillez renseigner le prenom ")
    @NotNull(message = "le prenom est requis pour cette operation")
    private  String prenom;

    @JsonProperty("telephone")
    @NotBlank(message = "Veuillez renseigner le numero de telephone ")
    @NotNull(message = "le telephone est requis pour cette operation")
    private  String telephone;

    @JsonProperty("numeromatricule")
    @NotBlank(message = "Veuillez renseigner le numeromatricule  ")
    @NotNull(message = "le numeromatricule est requis pour cette operation")
    private String numeromatricule;

    @JsonProperty("email")
    @NotBlank(message = "Veuillez renseigner l'email ")
    @NotNull(message = "l'email est requis pour cette operation")
    private String email;



}
