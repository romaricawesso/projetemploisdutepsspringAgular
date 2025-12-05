package com.emplois.temps.exceptions;

import lombok.NoArgsConstructor;

@NoArgsConstructor
public class MatieresNotFoundException extends  RuntimeException{

    public MatieresNotFoundException(String message){
        super(message);
    }
}
