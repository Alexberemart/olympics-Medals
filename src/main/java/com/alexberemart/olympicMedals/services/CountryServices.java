package com.alexberemart.olympicMedals.services;

import com.alexberemart.olympicMedals.model.dao.CountryDAO;
import com.alexberemart.olympicMedals.model.vo.Country;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CountryServices {

    @Autowired
    CountryDAO countryDAO;

    public List<Country> findAll(){
        return countryDAO.findAll();
    }

    public Country saveCountry(Country country){
        return countryDAO.makePersistent(country);
    }

}