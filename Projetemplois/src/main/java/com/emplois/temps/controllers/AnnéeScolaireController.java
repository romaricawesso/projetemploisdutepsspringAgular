package com.emplois.temps.controllers;

import com.emplois.temps.dtos.AnnéeScolaireDto;
import com.emplois.temps.interfaces.AnnéeScolaireService;
import com.emplois.temps.models.AnnéeScolaire;
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
@RequestMapping("/annee")
public class AnnéeScolaireController {

    @Autowired
    private AnnéeScolaireService annéeScolaireService;

    @GetMapping("")
    public List<AnnéeScolaire> getAll(){
        return  this.annéeScolaireService.findAll();
    }

    @PostMapping("")
    public AnnéeScolaire save(@Valid @RequestBody AnnéeScolaire annéeScolaire){
        return  this.annéeScolaireService.save(annéeScolaire);
    }

    @PutMapping("/{id}")
    public AnnéeScolaire update(@PathVariable("id") Long id , @Valid @RequestBody AnnéeScolaire annéeScolaire) throws Exception {
        return  this.annéeScolaireService.update(id,annéeScolaire);
    }

    @DeleteMapping("/{id}")
    public boolean delete(@PathVariable("id") Long id){
        return  this.annéeScolaireService.delete(id);
    }

    @GetMapping("/get/{id}")
    public AnnéeScolaire getById(@PathVariable("id") Long id){
        return  this.annéeScolaireService.getOneById(id);
    }


}
