package com.emplois.temps.exceptions;

import lombok.NoArgsConstructor;

@NoArgsConstructor
public class ClassesNotFoundException extends  RuntimeException{

    public ClassesNotFoundException(String message){
        super(message);
    }
}
