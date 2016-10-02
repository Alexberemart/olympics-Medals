package model.vo;

import java.util.List;

public class Result {

    protected String sport;
    protected String event;
    protected Boolean male;
    protected Boolean female;

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

    public List<MedalResult> getMedals() {
        return medals;
    }

    public void setMedals(List<MedalResult> medals) {
        this.medals = medals;
    }

    protected List<MedalResult> medals;
}
