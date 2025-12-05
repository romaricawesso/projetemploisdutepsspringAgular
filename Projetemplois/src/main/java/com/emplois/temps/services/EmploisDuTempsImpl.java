package com.emplois.temps.services;


import com.emplois.temps.dtos.EmploisDuTempsDto;
import com.emplois.temps.exceptions.EmploisDuTempsNotFoundException;
import com.emplois.temps.exceptions.message.GlobalMessage;
import com.emplois.temps.interfaces.EmploisDuTempsService;
import com.emplois.temps.mappers.MapperToEmploisDuTemps;
import com.emplois.temps.models.EmploisDuTemps;
import com.emplois.temps.repository.EmploisDuTempsRepository;
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
public class EmploisDuTempsImpl implements EmploisDuTempsService {

    @Autowired
    private EmploisDuTempsRepository emploisDuTempsRepository;

    private MapperToEmploisDuTemps mapperToEmploisDuTemps;


    @Override
    public List<EmploisDuTemps> findAll() {
        return emploisDuTempsRepository.findAll();
    }


    @Override
    public EmploisDuTemps getOneById(Long id) {
        return emploisDuTempsRepository.findById(id).get();
    }


    @Override
    public EmploisDuTemps save(EmploisDuTemps emploisDuTemps) {

        try {
            return this.emploisDuTempsRepository.save(emploisDuTemps);

        }catch (Exception e){
            throw  new EmploisDuTempsNotFoundException(GlobalMessage.EMPLOIS_DU_TEMPS_SAVE_FAILED);
        }

    }

    @Override
    public  EmploisDuTemps update(Long id,EmploisDuTemps emploisDuTemps) {
        if (!this.emploisDuTempsRepository.existsById(id)){
            throw  new EmploisDuTempsNotFoundException(GlobalMessage.EMPLOIS_DU_TEMPS_ERROR);
        }
        try {
            emploisDuTemps.setId(id);
            return this.emploisDuTempsRepository.save(emploisDuTemps);
        }catch (Exception e){
            throw new EmploisDuTempsNotFoundException(GlobalMessage.EMPLOIS_DU_TEMPS_UPDATE_FAILED);
        }
    }


    @Override
    public boolean delete(Long id) {
        boolean result;
        try {
            this.emploisDuTempsRepository.deleteById(id);
            result=true;
        }catch (Exception e){
            System.out.println("Error: Suppression a échoué");
            result=false;
        }
        return result;
    }
}
