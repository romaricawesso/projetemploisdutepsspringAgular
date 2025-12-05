package com.emplois.temps.interfaces;


import com.emplois.temps.models.AnnéeScolaire;

import java.util.List;


public interface AnnéeScolaireService {
    public List<AnnéeScolaire> findAll();
    public AnnéeScolaire getOneById(Long id);
    public AnnéeScolaire update(Long id, AnnéeScolaire annéeScolaire) throws Exception;
    public AnnéeScolaire save(AnnéeScolaire annéeScolaire);
    public boolean delete(Long id);
}
