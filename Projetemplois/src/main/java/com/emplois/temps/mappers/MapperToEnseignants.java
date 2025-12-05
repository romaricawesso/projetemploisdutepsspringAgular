package com.emplois.temps.mappers;

import com.emplois.temps.dtos.EnseignantsDto;
import com.emplois.temps.models.Enseignants;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface MapperToEnseignants {

    @Mapping(target = "id",ignore = true)
    Enseignants toEnseignants(EnseignantsDto enseignantsDto);

    EnseignantsDto toEnseignantsDto(Enseignants enseignants);
}
