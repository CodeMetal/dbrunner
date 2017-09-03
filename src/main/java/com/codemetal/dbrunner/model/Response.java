package com.codemetal.dbrunner.model;

import java.util.List;

public class Response {
	private String message;
	private String errorCode;
	private String errorMessage;
	private QueryResult result;
	
	
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public String getErrorCode() {
		return errorCode;
	}
	public void setErrorCode(String errorCode) {
		this.errorCode = errorCode;
	}
	public String getErrorMessage() {
		return errorMessage;
	}
	public void setErrorMessage(String errorMessage) {
		this.errorMessage = errorMessage;
	}
	public QueryResult getResult() {
		return result;
	}
	public void setResult(QueryResult result) {
		this.result = result;
	}
	
	
	
}
