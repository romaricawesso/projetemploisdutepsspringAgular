package com.emplois.temps.interfaces;


import com.emplois.temps.models.Cours;

import java.util.List;


public interface CoursService {
    public List<Cours> findAll();
    public Cours getOneById(Long id);
    public Cours update(Long id, Cours cours);
    public Cours save(Cours cours);
    public boolean delete(Long id);

}
