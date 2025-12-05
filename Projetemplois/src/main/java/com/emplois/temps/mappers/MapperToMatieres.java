package com.emplois.temps.mappers;


import com.emplois.temps.dtos.MatieresDto;
import com.emplois.temps.models.Matieres;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface MapperToMatieres {
    @Mapping(target = "id",ignore = true)
    Matieres toMatieres(MatieresDto matieresDto);

    MatieresDto toMatieresDto(Matieres matieres);
}
