package com.emplois.temps.interfaces;

import com.emplois.temps.models.Classes;


import java.util.List;

public interface ClasseService {
    public List<Classes> findAll();
    public Classes getOneById(Long id) throws Exception ;
    public Classes update(Long id, Classes classes);
    public Classes save(Classes classes);
    public boolean delete(Long id);
}
