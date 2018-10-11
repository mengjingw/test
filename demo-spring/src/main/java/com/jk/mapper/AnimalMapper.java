package com.jk.mapper;

import com.jk.model.Animal;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface AnimalMapper {

    int queryAniCount(Animal ani);

    List<Animal> queryAniList(Animal ani);

    void deleteani(@Param("id")String id);

    void addanimal(Animal ani);

    Animal queryupdend(@Param("id")String id);

    void updanimal(Animal ani);
}
