package com.emplois.temps.interfaces;


import com.emplois.temps.dtos.EnseignantsDto;
import com.emplois.temps.models.Enseignants;
import org.springframework.data.domain.Page;

import java.util.List;

public interface EnseignantService {
    public List<Enseignants> findAll();
    public Enseignants getOneById(Long id);
    public Enseignants update(Long id, Enseignants enseignants);
    public Enseignants save(Enseignants enseignants);
    public boolean delete(Long id);

}
