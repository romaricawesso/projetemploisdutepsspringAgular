package com.emplois.temps.interfaces;
import com.emplois.temps.models.Matieres;


import java.util.List;



public interface MatiereService {
    public List<Matieres> findAll();
    public Matieres getOneById(Long id);
    public Matieres update(Long id, Matieres matieres);
    public Matieres save(Matieres matieres);
    public boolean delete(Long id);
}
