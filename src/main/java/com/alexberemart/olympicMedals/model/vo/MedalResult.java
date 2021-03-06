package com.alexberemart.olympicMedals.model.vo;

import com.alexberemart.core.model.vo.base.BaseEntity;
import org.codehaus.jackson.annotate.JsonBackReference;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@org.hibernate.annotations.Entity(dynamicUpdate = true)
@Table(name = "resultMedals")
@Entity
public class MedalResult extends BaseEntity {

    protected Result result;
    protected Integer medalId;
    protected String name;

    @ManyToOne
    @JoinColumn(name = "resultId", nullable = false)
    @JsonBackReference("result")
    public Result getResult() {
        return result;
    }

    public void setResult(Result result) {
        this.result = result;
    }

    protected String countryId;

    public Integer getMedalId() {
        return medalId;
    }

    public void setMedalId(Integer medalId) {
        this.medalId = medalId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCountryId() {
        return countryId;
    }

    public void setCountryId(String countryId) {
        this.countryId = countryId;
    }
}
