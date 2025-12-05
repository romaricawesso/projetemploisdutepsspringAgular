package com.emplois.temps.controllers;


import com.emplois.temps.dtos.ClassesDto;
import com.emplois.temps.interfaces.ClasseService;
import com.emplois.temps.models.Classes;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.bind.DefaultValue;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Controller
@CrossOrigin(value = "*")
@RequestMapping("/classe")
public class ClasseController {

    @Autowired
    private ClasseService classeService;

    @GetMapping("")
    public List<Classes> getAll(){
        return  this.classeService.findAll();
    }

    @PostMapping("")
    public Classes save(@Valid @RequestBody Classes classes){
        return  this.classeService.save(classes);
    }

    @PutMapping("/{id}")
    public Classes update(@PathVariable("id") Long id , @Valid @RequestBody Classes classes) throws Exception {
        return  this.classeService.update(id,classes);
    }

    @DeleteMapping("/{id}")
    public boolean delete(@PathVariable("id") Long id){
        return  this.classeService.delete(id);
    }

    @GetMapping("/get/{id}")
    public Classes getById(@PathVariable("id") Long id) throws Exception {
        return  this.classeService.getOneById(id);
    }
}
