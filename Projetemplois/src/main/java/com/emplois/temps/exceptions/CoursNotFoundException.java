package com.emplois.temps.exceptions;

import lombok.NoArgsConstructor;

@NoArgsConstructor
public class CoursNotFoundException extends  RuntimeException{

    public CoursNotFoundException(String message){
        super(message);
    }
}
