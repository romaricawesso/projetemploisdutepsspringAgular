package com.emplois.temps.controllers;


import com.emplois.temps.dtos.EmploisDuTempsDto;
import com.emplois.temps.interfaces.EmploisDuTempsService;
import com.emplois.temps.models.EmploisDuTemps;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.bind.DefaultValue;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(value = "*")
@Controller
@RequestMapping("/emplois")
public class EmploisDuTempsController {

    @Autowired
    private EmploisDuTempsService emploisDuTempsService;

    @GetMapping("")
    public List<EmploisDuTemps> getAll(){
        return  this.emploisDuTempsService.findAll();
    }

    @PostMapping("")
    public EmploisDuTemps save(@Valid @RequestBody EmploisDuTemps emploisDuTemps){
        return  this.emploisDuTempsService.save(emploisDuTemps);
    }

    @PutMapping("/{id}")
    public EmploisDuTemps update(@PathVariable("id") Long id , @Valid @RequestBody EmploisDuTemps emploisDuTemps) throws Exception {
        return  this.emploisDuTempsService.update(id,emploisDuTemps);
    }

    @DeleteMapping("/{id}")
    public boolean delete(@PathVariable("id") Long id){
        return  this.emploisDuTempsService.delete(id);
    }

    @GetMapping("/get/{id}")
    public EmploisDuTemps getById(@PathVariable("id") Long id) throws Exception {
        return  this.emploisDuTempsService.getOneById(id);
    }
}
