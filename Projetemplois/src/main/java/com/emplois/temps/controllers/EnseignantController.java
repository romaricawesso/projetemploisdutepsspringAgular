package com.emplois.temps.controllers;


import com.emplois.temps.dtos.EnseignantsDto;
import com.emplois.temps.interfaces.EnseignantService;
import com.emplois.temps.models.Enseignants;
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
@RequestMapping("/enseignant")
public class EnseignantController {

    @Autowired
    private EnseignantService enseignantService;

    @GetMapping("")
    public List<Enseignants> getAll(){
        return  this.enseignantService.findAll();
    }

    @PostMapping("")
    public Enseignants save(@Valid @RequestBody Enseignants enseignants){
        return  this.enseignantService.save(enseignants);
    }

    @PutMapping("/{id}")
    public Enseignants update(@PathVariable("id") Long id , @Valid @RequestBody Enseignants enseignants) throws Exception {
        return  this.enseignantService.update(id,enseignants);
    }

    @DeleteMapping("/{id}")
    public boolean delete(@PathVariable("id") Long id){
        return  this.enseignantService.delete(id);
    }

    @GetMapping("/get/{id}")
    public Enseignants getById(@PathVariable("id") Long id) throws Exception {
        return  this.enseignantService.getOneById(id);
    }


}
