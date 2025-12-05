package com.emplois.temps.services;

import com.emplois.temps.dtos.AnnéeScolaireDto;
import com.emplois.temps.exceptions.AnnéeScolaireNotFoundException;
import com.emplois.temps.exceptions.message.GlobalMessage;
import com.emplois.temps.interfaces.AnnéeScolaireService;
import com.emplois.temps.mappers.MapperToAnnéeScolaire;
import com.emplois.temps.models.AnnéeScolaire;
import com.emplois.temps.repository.AnnéeScolaireRepository;
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
public class AnnéeScolaireServiceImpl implements AnnéeScolaireService {

    @Autowired
    private AnnéeScolaireRepository annéeScolaireRepository;

    private MapperToAnnéeScolaire mapperToAnnéeScolaire;


    @Override
    public List<AnnéeScolaire> findAll() {
        return annéeScolaireRepository.findAll();
    }


    @Override
    public AnnéeScolaire getOneById(Long id) {
        return annéeScolaireRepository.findById(id).get();
    }


    @Override
    public AnnéeScolaire save(AnnéeScolaire annéeScolaire) {

        try {
            return this.annéeScolaireRepository.save(annéeScolaire);

        }catch (Exception e){
            throw  new AnnéeScolaireNotFoundException(GlobalMessage.ANNEE_SAVE_FAILED);
        }

    }

    @Override
    public AnnéeScolaire update(Long id, AnnéeScolaire annéeScolaire) throws Exception {
        if (!this.annéeScolaireRepository.existsById(id)){
            throw  new AnnéeScolaireNotFoundException(GlobalMessage.ANNEE_FOUND_ERROR);
        }
        try {
            annéeScolaire.setId(id);
            return this.annéeScolaireRepository.save(annéeScolaire);
        }catch (Exception e){
            throw new AnnéeScolaireNotFoundException(GlobalMessage.ANNEE_UPDATE_FAILED);
        }
    }


    @Override
    public boolean delete(Long id) {
        boolean result;
        try {
            this.annéeScolaireRepository.deleteById(id);
            result=true;
        }catch (Exception e){
            System.out.println("Error: Suppression a échoué");
            result=false;
        }
        return result;
    }

}
