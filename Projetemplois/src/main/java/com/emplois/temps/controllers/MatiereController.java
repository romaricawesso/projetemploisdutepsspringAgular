package com.emplois.temps.controllers;

import com.emplois.temps.dtos.MatieresDto;
import com.emplois.temps.interfaces.MatiereService;
import com.emplois.temps.models.Matieres;
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
@RequestMapping("/matiere")
public class MatiereController {


    @Autowired
    private MatiereService matiereService;

    @GetMapping("")
    public List<Matieres> getAll(){
        return  this.matiereService.findAll();
    }

    @PostMapping("")
    public Matieres save(@Valid @RequestBody Matieres matieres){
        return  this.matiereService.save(matieres);
    }

    @PutMapping("/{id}")
    public Matieres update(@PathVariable("id") Long id , @Valid @RequestBody Matieres matieres) throws Exception {
        return  this.matiereService.update(id,matieres);
    }

    @DeleteMapping("/{id}")
    public boolean delete(@PathVariable("id") Long id){
        return  this.matiereService.delete(id);
    }

    @GetMapping("/get/{id}")
    public Matieres getById(@PathVariable("id") Long id) throws Exception {
        return  this.matiereService.getOneById(id);
    }


}
