package com.emplois.temps.exceptions;

import lombok.NoArgsConstructor;

@NoArgsConstructor
public class AnnéeScolaireNotFoundException extends  RuntimeException{

    public AnnéeScolaireNotFoundException(String message){
        super(message);
    }
}
