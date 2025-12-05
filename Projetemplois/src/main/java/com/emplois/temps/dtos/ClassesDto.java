package com.emplois.temps.dtos;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@NoArgsConstructor
@AllArgsConstructor
@Data
public class ClassesDto {


    @JsonProperty("intitule")
    @NotBlank(message = "Veuillez renseigner l'intitule ")
    @NotNull(message = "l'intitule est requis pour cette operation")
    private String intitule;

    @JsonProperty("code")
    @NotBlank(message = "Veuillez renseigner le code ")
    @NotNull(message = "le code est requis pour cette operation")
    private String code;
}
