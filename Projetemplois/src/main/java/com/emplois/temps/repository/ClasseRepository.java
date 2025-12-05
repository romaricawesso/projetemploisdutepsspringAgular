package com.emplois.temps.repository;

import com.emplois.temps.models.Classes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClasseRepository extends JpaRepository<Classes,Long> {

}
