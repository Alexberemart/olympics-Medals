package com.alexberemart.olympicMedals.services;

import com.alexberemart.olympicMedals.AbstractOlympicMedalsTest;
import com.alexberemart.olympicMedals.model.vo.Result;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

public class ResultServicesTest extends AbstractOlympicMedalsTest {

    @Autowired
    ResultServices resultServices;

    @Test
    public void saveResult(){

        Result result = new Result();
        resultServices.saveResult(result);
    }

    @Test
    public void deleteResult(){

        Result result = new Result();
        Result resultPersisted = resultServices.saveResult(result);
        resultServices.deleteResult(resultPersisted.getId());
    }

    @Test
    public void findAll(){

        resultServices.findAll();
    }

}
