package com.emplois.temps.mappers;

import com.emplois.temps.dtos.ClassesDto;
import com.emplois.temps.models.Classes;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface MapperToClasses {
    @Mapping(target = "id",ignore = true)
    Classes toClasses(ClassesDto classesDto);

    ClassesDto toClassesDto(Classes classes);
}
