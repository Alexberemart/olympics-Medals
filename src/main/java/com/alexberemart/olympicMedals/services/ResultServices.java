package com.alexberemart.olympicMedals.services;

import com.alexberemart.olympicMedals.model.dao.ResultDAO;
import com.alexberemart.olympicMedals.model.vo.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ResultServices {

    @Autowired
    ResultDAO resultDAO;

    public Result saveResult(Result result){
        return resultDAO.makePersistent(result);
    }

    public List<Result> findAll(){
        return resultDAO.findAll();
    }

}