package com.emplois.temps.repository;

import com.emplois.temps.models.EmploisDuTemps;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmploisDuTempsRepository extends JpaRepository<EmploisDuTemps,Long> {

}
