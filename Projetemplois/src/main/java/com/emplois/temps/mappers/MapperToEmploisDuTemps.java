package com.emplois.temps.mappers;

import com.emplois.temps.dtos.EmploisDuTempsDto;
import com.emplois.temps.models.EmploisDuTemps;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface MapperToEmploisDuTemps {
    @Mapping(target = "id",ignore = true)
    @Mapping(target = "classes.id",source = "classes")
    @Mapping(target = "cours.id",source = "cours")
    @Mapping(target = "enseignants.id",source = "enseignants")
    EmploisDuTemps toEmploisDuTemps(EmploisDuTempsDto emploisDuTempsDto);


    @Mapping(target = "enseignants",source = "enseignants.id")
    @Mapping(target = "cours",source = "cours.id")
    @Mapping(target = "classes",source = "classes.id")
    EmploisDuTempsDto toEmploisDuTempsDto(EmploisDuTemps emploisDuTemps);

}
