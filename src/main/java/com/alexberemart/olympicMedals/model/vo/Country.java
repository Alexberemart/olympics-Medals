package com.alexberemart.olympicMedals.model.vo;

import com.alexberemart.core.model.vo.base.BaseEntity;

import javax.persistence.Entity;
import javax.persistence.Table;

@org.hibernate.annotations.Entity(dynamicUpdate = true)
@Table(name = "countries")
@Entity
public class Country extends BaseEntity{

    protected String name;
    protected String flagFileName;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getFlagFileName() {
        return flagFileName;
    }

    public void setFlagFileName(String flagFileName) {
        this.flagFileName = flagFileName;
    }
}
