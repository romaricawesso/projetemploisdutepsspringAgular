package com.emplois.temps.exceptions;

import lombok.NoArgsConstructor;

@NoArgsConstructor
public class EnseignantsNotFoundException extends  RuntimeException{
    public EnseignantsNotFoundException(String message){
        super(message);
    }
}
