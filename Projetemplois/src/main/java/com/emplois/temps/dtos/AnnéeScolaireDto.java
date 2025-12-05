package com.emplois.temps.dtos;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class AnnéeScolaireDto {

    @JsonProperty("code")
    @NotBlank(message = "Veuillez renseigner le code ")
    @NotNull(message = "le code est requis pour cette operation")
    private String code;

    @JsonProperty("datededebut")
    @NotBlank(message = "Veuillez renseigner la date de début ")
    @NotNull(message = "la date de début  est requis pour cette operation")
    private Date datededebut;

    @JsonProperty("datedefin")
    @NotBlank(message = "Veuillez renseigner la date de fin ")
    @NotNull(message = "la date de fin est requis pour cette operation")
    private Date datedefin;





}
