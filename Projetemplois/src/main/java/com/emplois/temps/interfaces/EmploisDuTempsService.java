package com.emplois.temps.interfaces;

import com.emplois.temps.dtos.EmploisDuTempsDto;
import com.emplois.temps.models.EmploisDuTemps;
import org.springframework.data.domain.Page;

import java.util.List;

public interface EmploisDuTempsService {
    public List<EmploisDuTemps> findAll();
    public EmploisDuTemps getOneById(Long id);

    public EmploisDuTemps update(Long id, EmploisDuTemps emploisDuTemps);
    public EmploisDuTemps save(EmploisDuTemps emploisDuTemps);
    public boolean delete(Long id);
}
