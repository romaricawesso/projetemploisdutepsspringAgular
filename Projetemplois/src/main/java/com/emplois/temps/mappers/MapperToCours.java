package com.emplois.temps.mappers;
import com.emplois.temps.dtos.CoursDto;
import com.emplois.temps.models.Cours;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface MapperToCours {

    @Mapping(target = "id",ignore = true)
    @Mapping(target = "matieres.id",source = "matieres")
    @Mapping(target = "classes.id",source = "classes")
    @Mapping(target = "annéeScolaire.id",source = "annéeScolaire")
    @Mapping(target = "enseignants.id",source = "enseignants")
    Cours toCours(CoursDto coursDto);


    @Mapping(target = "enseignants",source = "enseignants.id")
    @Mapping(target = "annéeScolaire",source = "annéeScolaire.id")
    @Mapping(target = "classes",source = "classes.id")
    @Mapping(target = "matieres",source = "matieres.id")
    CoursDto toCoursDto(Cours cours);


}
