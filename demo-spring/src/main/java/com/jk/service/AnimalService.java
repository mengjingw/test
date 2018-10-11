package com.jk.service;

import com.jk.model.Animal;

import java.util.List;

public interface AnimalService {
    int queryAniCount(Animal ani);

    List<Animal> queryAniList(Animal ani);

    void deleteani(String id);

    void addanimal(Animal ani);

    Animal queryupdend(String id);

    void updanimal(Animal ani);
}
