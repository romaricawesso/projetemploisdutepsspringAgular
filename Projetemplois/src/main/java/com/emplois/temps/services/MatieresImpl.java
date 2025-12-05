package com.emplois.temps.services;

import com.emplois.temps.dtos.MatieresDto;
import com.emplois.temps.exceptions.EmploisDuTempsNotFoundException;
import com.emplois.temps.exceptions.EnseignantsNotFoundException;
import com.emplois.temps.exceptions.MatieresNotFoundException;
import com.emplois.temps.exceptions.message.GlobalMessage;
import com.emplois.temps.interfaces.MatiereService;
import com.emplois.temps.mappers.MapperToMatieres;
import com.emplois.temps.models.Enseignants;
import com.emplois.temps.models.Matieres;
import com.emplois.temps.repository.MatiereRepository;
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
public class MatieresImpl implements MatiereService {


    @Autowired
    private MatiereRepository matiereRepository;

    private MapperToMatieres mapperToMatieres;


    @Override
    public List<Matieres> findAll() {
        return matiereRepository.findAll();
    }


    @Override
    public Matieres getOneById(Long id) {
        return matiereRepository.findById(id).get();
    }


    @Override
    public Matieres save(Matieres matieres) {
        try {
            return this.matiereRepository.save(matieres);

        } catch (Exception e) {
            throw new MatieresNotFoundException(GlobalMessage.MATIERE_SAVE_FAILED);
        }
    }

    @Override
    public Matieres update(Long id, Matieres matieres){
        if (!this.matiereRepository.existsById(id)) {
            throw new MatieresNotFoundException(GlobalMessage.MATIERE_FOUND_ERROR);
        }
        try {
            matieres.setId(id);
            return this.matiereRepository.save(matieres);
        } catch (Exception e) {
            throw new MatieresNotFoundException(GlobalMessage.MATIERE_UPDATE_FAILED);
        }
    }


    @Override
    public boolean delete(Long id) {
        boolean result;
        try {
            this.matiereRepository.deleteById(id);
            result=true;
        }catch (Exception e){
            System.out.println("Error: Suppression a échoué");
            result=false;
        }
        return result;
    }
}
