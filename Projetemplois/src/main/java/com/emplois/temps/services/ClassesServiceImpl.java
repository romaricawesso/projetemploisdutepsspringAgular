package com.emplois.temps.services;


import com.emplois.temps.dtos.AnnéeScolaireDto;
import com.emplois.temps.dtos.ClassesDto;
import com.emplois.temps.exceptions.AnnéeScolaireNotFoundException;
import com.emplois.temps.exceptions.ClassesNotFoundException;
import com.emplois.temps.exceptions.message.GlobalMessage;
import com.emplois.temps.interfaces.ClasseService;
import com.emplois.temps.mappers.MapperToClasses;
import com.emplois.temps.models.AnnéeScolaire;
import com.emplois.temps.models.Classes;
import com.emplois.temps.repository.ClasseRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Service
@Transactional
@AllArgsConstructor
public class ClassesServiceImpl implements ClasseService {

    @Autowired
    private ClasseRepository classeRepository;

    private MapperToClasses mapperToClasses;


    @Override
    public List<Classes> findAll() {
        return classeRepository.findAll();
    }


    @Override
    public Classes getOneById(Long id) {
        return classeRepository.findById(id).get();
    }


    @Override
    public Classes save(Classes classes) {

        try {
            return this.classeRepository.save(classes);

        }catch (Exception e){
            throw  new  ClassesNotFoundException(GlobalMessage.CLASSE_SAVE_FAILED);
        }

    }

    @Override
    public Classes update(Long id,Classes classes) {
        if (!this.classeRepository.existsById(id)){
            throw  new ClassesNotFoundException(GlobalMessage.CLASSE_FOUND_ERROR);
        }
        try {
            classes.setId(id);
            return this.classeRepository.save(classes);
        }catch (Exception e){
            throw new ClassesNotFoundException(GlobalMessage.CLASSE_UPDATE_FAILED);
        }
    }

    @Override
    public boolean delete(Long id) {
        boolean result;
        try {
            this.classeRepository.deleteById(id);
            result=true;
        }catch (Exception e){
            System.out.println("Error: Suppression a échoué");
            result=false;
        }
        return result;
    }

}
