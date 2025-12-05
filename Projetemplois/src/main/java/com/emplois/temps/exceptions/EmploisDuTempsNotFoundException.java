package com.emplois.temps.exceptions;

import lombok.NoArgsConstructor;

@NoArgsConstructor
public class EmploisDuTempsNotFoundException extends  RuntimeException{

    public EmploisDuTempsNotFoundException(String message){
        super(message);
    }
}
