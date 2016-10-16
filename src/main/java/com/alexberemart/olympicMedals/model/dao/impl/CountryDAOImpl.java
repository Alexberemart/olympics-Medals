package com.alexberemart.olympicMedals.model.dao.impl;

import com.alexberemart.core.model.dao.base.hibernate.spring.impl.GenericHibernateSpringDAOImpl;
import com.alexberemart.olympicMedals.model.dao.CountryDAO;
import com.alexberemart.olympicMedals.model.vo.Country;

public class CountryDAOImpl extends GenericHibernateSpringDAOImpl<Country, String> implements CountryDAO {

    public CountryDAOImpl() {
        super(Country.class);
    }

}
