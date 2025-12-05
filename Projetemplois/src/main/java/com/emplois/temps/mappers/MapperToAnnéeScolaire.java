package com.emplois.temps.mappers;


import com.emplois.temps.dtos.AnnéeScolaireDto;
import com.emplois.temps.models.AnnéeScolaire;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface MapperToAnnéeScolaire {
    @Mapping(target = "id",ignore = true)
    AnnéeScolaire toAnnéeScolaire(AnnéeScolaireDto annéeScolaireDto);

    AnnéeScolaireDto toAnnéeScolaireDto(AnnéeScolaire annéeScolaire);

}
