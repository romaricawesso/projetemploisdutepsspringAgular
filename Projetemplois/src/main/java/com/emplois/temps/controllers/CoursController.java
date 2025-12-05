package com.emplois.temps.controllers;



import com.emplois.temps.dtos.CoursDto;
import com.emplois.temps.interfaces.CoursService;
import com.emplois.temps.models.Cours;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Controller
@CrossOrigin(value = "*")
@RequestMapping("/cours")
public class CoursController {

    @Autowired
    private CoursService coursService;

    @GetMapping("")
    public List<Cours> getAll(){
        return  this.coursService.findAll();
    }

    @PostMapping("")
    public Cours save(@Valid @RequestBody Cours cours){
        return  this.coursService.save(cours);
    }

    @PutMapping("/{id}")
    public Cours update(@PathVariable("id") Long id , @Valid @RequestBody Cours cours) throws Exception {
        return  this.coursService.update(id,cours);
    }

    @DeleteMapping("/{id}")
    public boolean delete(@PathVariable("id") Long id){
        return  this.coursService.delete(id);
    }

    @GetMapping("/get/{id}")
    public Cours getById(@PathVariable("id") Long id) {
        return  this.coursService.getOneById(id);
    }
}
