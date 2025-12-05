package com.emplois.temps.repository;


import com.emplois.temps.models.AnnéeScolaire;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AnnéeScolaireRepository extends JpaRepository<AnnéeScolaire,Long> {

}
