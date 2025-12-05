package com.emplois.temps.services;

import com.emplois.temps.dtos.EmploisDuTempsDto;
import com.emplois.temps.dtos.EnseignantsDto;
import com.emplois.temps.exceptions.EmploisDuTempsNotFoundException;
import com.emplois.temps.exceptions.EnseignantsNotFoundException;
import com.emplois.temps.exceptions.message.GlobalMessage;
import com.emplois.temps.interfaces.EnseignantService;
import com.emplois.temps.mappers.MapperToEnseignants;
import com.emplois.temps.models.EmploisDuTemps;
import com.emplois.temps.models.Enseignants;
import com.emplois.temps.repository.EnseignantRepository;
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
public class EnseignantsServiceImpl implements EnseignantService {

    @Autowired
    private EnseignantRepository enseignantRepository;

    private MapperToEnseignants mapperToEnseignants;


    @Override
    public List<Enseignants> findAll() {
        return enseignantRepository.findAll();
    }


    @Override
    public Enseignants getOneById(Long id) {
        return enseignantRepository.findById(id).get();
    }


    @Override
    public Enseignants save(Enseignants enseignants) {
        try {
            return this.enseignantRepository.save(enseignants);

        }catch (Exception e){
            throw  new EnseignantsNotFoundException(GlobalMessage.ENSEIGNANTS_SAVE_FAILED);
        }
    }


    @Override
    public Enseignants update(Long id, Enseignants enseignants) {
        if (!this.enseignantRepository.existsById(id)) {
            throw new EnseignantsNotFoundException(GlobalMessage.EMPLOIS_DU_TEMPS_ERROR);
        }
        try {
            enseignants.setId(id);
            return this.enseignantRepository.save(enseignants);
        } catch (Exception e) {
            throw new EmploisDuTempsNotFoundException(GlobalMessage.EMPLOIS_DU_TEMPS_UPDATE_FAILED);
        }
    }


    @Override
    public boolean delete(Long id) {
        boolean result;
        try {
            this.enseignantRepository.deleteById(id);
            result=true;
        }catch (Exception e){
            System.out.println("Error: Suppression a échoué");
            result=false;
        }
        return result;
    }

}
