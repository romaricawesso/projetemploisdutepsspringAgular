package com.emplois.temps.dtos;

import jakarta.persistence.*;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;



@AllArgsConstructor
@NoArgsConstructor
@Data
public class MatieresDto {


    @JsonProperty("intitule")
    @NotBlank(message = "Veuillez renseigner l'intitule ")
    @NotNull(message = "le nom de l'intitule  est requis pour cette operation")
    private String intitule;

    @JsonProperty("code")
    @NotBlank(message = "Veuillez renseigner le code ")
    @NotNull(message = "le nom de le code  est requis pour cette operation")
    private String code;


}
