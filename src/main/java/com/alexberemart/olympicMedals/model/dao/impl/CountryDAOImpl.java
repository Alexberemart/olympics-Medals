package com.alexberemart.olympicMedals.model.dao.impl;

import com.alexberemart.core.model.dao.base.hibernate.spring.impl.GenericHibernateSpringDAOImpl;
import com.alexberemart.olympicMedals.model.dao.CountryDAO;
import com.alexberemart.olympicMedals.model.vo.Country;
import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.Restrictions;

public class CountryDAOImpl extends GenericHibernateSpringDAOImpl<Country, String> implements CountryDAO {

    public CountryDAOImpl() {
        super(Country.class);
    }

    @Override
    public Country getCountry(String id) {
        DetachedCriteria detachedCriteria = DetachedCriteria
                .forClass(Country.class)
                .add(Restrictions.eq("id", id));

        try {
            return (Country) this.getHibernateTemplate().findByCriteria(detachedCriteria).get(0);
        } catch (Exception e) {
            return null;
        }

    }
}
