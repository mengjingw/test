package com.jk.service;

import com.jk.mapper.AnimalMapper;
import com.jk.model.Animal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * <pre>项目名称：demo
 * 类名称：AnimalServiceImpl
 * 类描述：
 * 创建人：孟经纬
 * 创建时间：2018-10-10    下午 6:49
 * 修改人：孟经纬
 * 修改时间：2018-10-10    下午 6:49
 * 修改备注：
 * @version </pre>
 */
@Service
@Transactional(rollbackFor={Exception.class})
public class AnimalServiceImpl implements AnimalService{

    @Autowired
    private AnimalMapper animalMapper;

    public int queryAniCount(Animal ani) {

        return animalMapper.queryAniCount(ani);
    }

    public List<Animal> queryAniList(Animal ani) {
        return animalMapper.queryAniList(ani);
    }

    public void deleteani(String id) {

        animalMapper.deleteani(id);
    }


    public void addanimal(Animal ani) {

        animalMapper.addanimal(ani);
    }


    public Animal queryupdend(String id) {

        return animalMapper.queryupdend(id);
    }


    public void updanimal(Animal ani) {

        animalMapper.updanimal(ani);
    }

}
