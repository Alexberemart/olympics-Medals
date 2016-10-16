package com.alexberemart.olympicMedals.services;

import com.alexberemart.olympicMedals.AbstractOlympicMedalsTest;
import com.alexberemart.olympicMedals.model.vo.Country;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

public class CountryServicesTest extends AbstractOlympicMedalsTest {

    @Autowired
    CountryServices countryServices;

    @Test
    public void saveCountry(){

        Country country = new Country();
        countryServices.saveCountry(country);
    }

    @Test
    public void findAll(){

        countryServices.findAll();
    }

}
