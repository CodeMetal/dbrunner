package com.codemetal.dbrunner.model;

import java.util.ArrayList;
import java.util.List;

public class RowData {

	private List<Object> columnValue;
	
	public void addColumnValue(Object obj){
		if(columnValue == null){
			columnValue = new ArrayList<Object>();
		}
		columnValue.add(obj);
	}

	public List<Object> getColumnValue() {
		return columnValue;
	}

	public void setColumnValue(List<Object> columnValue) {
		this.columnValue = columnValue;
	}
	

	
	
	
}
