package com.codemetal.dbrunner;

import java.sql.SQLException;
import java.sql.SQLSyntaxErrorException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.BadSqlGrammarException;

import com.codemetal.dbrunner.controller.SqlController;
import com.codemetal.dbrunner.model.Response;

public class CustomExceptionHandler {
	private static final Logger LOGGER = LoggerFactory.getLogger(CustomExceptionHandler.class);
	
	
	public ResponseEntity<Response> handleError(Exception e) {
		LOGGER.error("in CustomExceptionHandler ", e);
		Response resp = new Response();
		
		if( e instanceof SQLSyntaxErrorException){
			SQLSyntaxErrorException se = (SQLSyntaxErrorException)e;
			resp.setErrorCode(Integer.toString(se.getErrorCode()));
			resp.setMessage(se.getMessage());
		}
		else if( e instanceof SQLException){
			SQLException se = (SQLException)e;
			resp.setErrorCode(Integer.toString(se.getErrorCode()));
			resp.setMessage(se.getMessage());
		}
		else if( e instanceof BadSqlGrammarException){
			BadSqlGrammarException se = (BadSqlGrammarException)e;
			SQLException sqe = se.getSQLException();
			resp.setErrorCode(Integer.toString(sqe.getErrorCode()));
			resp.setMessage("Sql is: " + se.getSql() + " " + sqe.getMessage());
		}
		else if( e instanceof DataAccessException){
			DataAccessException de = (DataAccessException)e;
			resp.setMessage(de.getMessage());
		}
		else{
			Throwable th = e.getCause();
			if( th instanceof SQLSyntaxErrorException){
				SQLSyntaxErrorException se = (SQLSyntaxErrorException)th;
				resp.setErrorCode(Integer.toString(se.getErrorCode()));
				resp.setMessage(se.getMessage());
			}
			else if( th instanceof SQLException){
				SQLException se = (SQLException)th;
				resp.setErrorCode(Integer.toString(se.getErrorCode()));
				resp.setMessage(se.getMessage());
			}
			else{				
				resp.setMessage(e.getMessage());
			}
			System.out.println("IN Catch: general"+ ": Msg: " + e.getMessage());
		}
        
        return new ResponseEntity<Response>(resp, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
