package com.codemetal.dbrunner.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codemetal.dbrunner.dao.SqlDAO;
import com.codemetal.dbrunner.model.QueryResult;

@Service
public class SqlService {
	@Autowired
	private SqlDAO dao;
	
	public void upsert(String sql){
		dao.upsert(sql);
	}
	
	public void ddl(String sql){
		dao.ddl(sql);
	}
	
	public QueryResult query(String sql){
		return dao.query(sql);
	}
}
