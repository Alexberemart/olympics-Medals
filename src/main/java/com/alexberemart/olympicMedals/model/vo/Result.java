package com.alexberemart.olympicMedals.model.vo;

import com.alexberemart.core.model.vo.base.BaseEntity;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Transient;
import java.util.List;

@org.hibernate.annotations.Entity(dynamicUpdate = true)
@Table(name = "result")
@Entity
public class Result extends BaseEntity{

    protected String sport;
    protected String event;
    protected Boolean male;
    protected Boolean female;

    @Transient
    protected List<MedalResult> medals;

    public String getSport() {
        return sport;
    }

    public void setSport(String sport) {
        this.sport = sport;
    }

    public String getEvent() {
        return event;
    }

    public void setEvent(String event) {
        this.event = event;
    }

    public Boolean getMale() {
        return male;
    }

    public void setMale(Boolean male) {
        this.male = male;
    }

    public Boolean getFemale() {
        return female;
    }

    public void setFemale(Boolean female) {
        this.female = female;
    }

    @Transient
    public List<MedalResult> getMedals() {
        return medals;
    }

    @Transient
    public void setMedals(List<MedalResult> medals) {
        this.medals = medals;
    }
}
