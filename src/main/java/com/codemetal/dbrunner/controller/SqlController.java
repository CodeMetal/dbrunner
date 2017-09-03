package com.codemetal.dbrunner.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.codemetal.dbrunner.CustomExceptionHandler;
import com.codemetal.dbrunner.model.QueryResult;
import com.codemetal.dbrunner.model.Response;
import com.codemetal.dbrunner.model.SqlData;
import com.codemetal.dbrunner.service.SqlService;

@RefreshScope
@RestController
@RequestMapping("/api/sql")
@CrossOrigin
public class SqlController {
	
	private static final Logger LOGGER = LoggerFactory.getLogger(SqlController.class);

	@Autowired
	private SqlService service;

	
	@RequestMapping(value = "/info", method = RequestMethod.GET)
	public ResponseEntity<String> info() {
		LOGGER.info("In Info method");
		return new ResponseEntity<String>("success", HttpStatus.OK);
	}

	@RequestMapping(value = "/upsert", method = RequestMethod.POST)
	public ResponseEntity<Response> upsert(@RequestBody SqlData data) {
		LOGGER.info("In upsert method");
		try{
			service.upsert(data.getSql());
		}
		catch(Exception e){
			return new CustomExceptionHandler().handleError(e);
		}
		
		Response response = new Response();
		response.setMessage("Statement successfully executed");
		return new ResponseEntity<Response>(response, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/ddl", method = RequestMethod.POST)
	public ResponseEntity<Response> ddl(@RequestBody SqlData data){
		LOGGER.info("In DDL method"+data);
		try{
			service.ddl(data.getSql());
		}
		catch(Exception e){
			return new CustomExceptionHandler().handleError(e);
		}
		Response response = new Response();
		response.setMessage("Statement successfully executed");
		return new ResponseEntity<Response>(response, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/query", method = RequestMethod.POST)
	public ResponseEntity<Response> query(@RequestBody SqlData data){
		LOGGER.info("In Query method"+data);
		Response resp = new Response();
		try{
			QueryResult result = service.query(data.getSql());
			resp.setResult(result);
		}
		catch(Exception e){
			return new CustomExceptionHandler().handleError(e);
		}
		Response response = new Response();
		resp.setMessage("Statement successfully executed");
		return new ResponseEntity<Response>(resp, HttpStatus.OK);
	}

	
}
