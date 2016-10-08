package com.alexberemart.olympicMedals.model.dao.impl;

import com.alexberemart.core.model.dao.base.hibernate.spring.impl.GenericHibernateSpringDAOImpl;
import com.alexberemart.olympicMedals.model.dao.ResultDAO;
import com.alexberemart.olympicMedals.model.vo.Result;

public class ResultDAOImpl extends GenericHibernateSpringDAOImpl<Result, String> implements ResultDAO {

    public ResultDAOImpl() {
        super(Result.class);
    }

}
