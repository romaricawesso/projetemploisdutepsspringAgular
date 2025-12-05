package com.emplois.temps.repository;

import com.emplois.temps.models.Enseignants;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EnseignantRepository extends JpaRepository<Enseignants,Long> {

}
