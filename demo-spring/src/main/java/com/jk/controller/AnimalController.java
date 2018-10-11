package com.jk.controller;

import com.jk.model.Animal;
import com.jk.model.StringUtil;
import com.jk.service.AnimalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.List;

/**
 * <pre>项目名称：demo
 * 类名称：AnimalController
 * 类描述：
 * 创建人：孟经纬
 * 创建时间：2018-10-10    下午 6:40
 * 修改人：孟经纬
 * 修改时间：2018-10-10    下午 6:40
 * 修改备注：
 * @version </pre>
 */
@Controller
@RequestMapping("animal")
public class AnimalController {

    @Autowired
    private AnimalService animalService;

    @RequestMapping("tiao")
    public String tiao() {
        return "ani";
    }
    /**
     * 查询
     * @param ani
     * @return
     */
    @RequestMapping("queryanimal")
    @ResponseBody
    public HashMap<String ,Object> queryanimal(Animal ani){
        HashMap<String, Object> result = new HashMap<String, Object>();
        //查总条数
        int count = animalService.queryAniCount(ani);
        ani.calculate();
        //查询分页
        List<Animal> list = animalService.queryAniList(ani);
        result.put("total",count);
        result.put("rows",list);
        return result;
    }
    /**
     * 批量删除
     * @param id
     * @return
     */
    @RequestMapping("deleteani")
    @ResponseBody
    public String deleteani(String id) {
        animalService.deleteani(id);
        return "1";
    }
    /**
     * 新增或修改
     * @param ani
     * @return
     */
    @RequestMapping("addanimal")
    @ResponseBody
    public String addanimal(Animal ani) {
        String uuid = StringUtil.getUUID();
        ani.setId(uuid);
        animalService.addanimal(ani);
        return "1";
    }
    /**
     * 修改前查询
     * @param id
     * @return
     */
    @RequestMapping("queryupdend")
    @ResponseBody
    public Animal queryupdend(String id) {
        Animal ani = animalService.queryupdend(id);
        return ani;
    }
    @RequestMapping("updteanimal")
    @ResponseBody
    public String updteanimal(Animal ani) {
        animalService.updanimal(ani);
        return "1";
    }
}
