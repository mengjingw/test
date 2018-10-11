package com.jk.model;

import java.io.Serializable;

/**
 * <pre>项目名称：demo
 * 类名称：Animal
 * 类描述：
 * 创建人：孟经纬
 * 创建时间：2018-10-10    下午 6:37
 * 修改人：孟经纬
 * 修改时间：2018-10-10    下午 6:37
 * 修改备注：
 * @version </pre>
 */
public class Animal extends Page implements Serializable {

    private String id;

    private String name;

    private Integer sex;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getSex() {
        return sex;
    }

    public void setSex(Integer sex) {
        this.sex = sex;
    }
}
