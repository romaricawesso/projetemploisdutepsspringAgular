package com.emplois.temps.services;

import com.emplois.temps.dtos.ClassesDto;
import com.emplois.temps.dtos.CoursDto;
import com.emplois.temps.exceptions.AnnéeScolaireNotFoundException;
import com.emplois.temps.exceptions.ClassesNotFoundException;
import com.emplois.temps.exceptions.CoursNotFoundException;
import com.emplois.temps.exceptions.message.GlobalMessage;
import com.emplois.temps.interfaces.CoursService;
import com.emplois.temps.mappers.MapperToClasses;
import com.emplois.temps.mappers.MapperToCours;
import com.emplois.temps.models.Classes;
import com.emplois.temps.models.Cours;
import com.emplois.temps.repository.CoursRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
@AllArgsConstructor
@Service
public class CoursServiceImpl implements CoursService {

    @Autowired
    private CoursRepository coursRepository;

    private MapperToCours mapperToCours;


    @Override
    public List<Cours> findAll() {
        return coursRepository.findAll();
    }


    @Override
    public Cours getOneById(Long id) {
        return coursRepository.findById(id).get();
    }


    @Override
    public Cours save(Cours cours) {

        try {
            return this.coursRepository.save(cours);

        }catch (Exception e){
            throw  new CoursNotFoundException(GlobalMessage.COURS_SAVE_FAILED);
        }

    }

    @Override
    public Cours update(Long id,Cours cours) {
        if (!this.coursRepository.existsById(id)){
            throw  new CoursNotFoundException(GlobalMessage.COURS_FOUND_ERROR);
        }
        try {
            cours.setId(id);
            return this.coursRepository.save(cours);
        }catch (Exception e){
            throw new CoursNotFoundException(GlobalMessage.COURS_UPDATE_FAILED);
        }
    }



    @Override
    public boolean delete(Long id) {
        boolean result;
        try {
            this.coursRepository.deleteById(id);
            result=true;
        }catch (Exception e){
            System.out.println("Error: Suppression a échoué");
            result=false;
        }
        return result;
    }
}
