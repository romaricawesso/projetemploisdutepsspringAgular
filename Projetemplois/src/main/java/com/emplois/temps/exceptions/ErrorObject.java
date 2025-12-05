package com.emplois.temps.exceptions;

import lombok.Data;

import java.util.Date;

@Data
public class ErrorObject {
    private  Integer status;
    private  String message;
    private Date timestamps;
}
