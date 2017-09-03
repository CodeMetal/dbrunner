package com.codemetal.dbrunner.model;

import java.util.List;

public class QueryResult {
	private List<RowData> row;
	private List<ColumnMetaData> columnMeta;

	public List<RowData> getRow() {
		return row;
	}

	public void setRow(List<RowData> row) {
		this.row = row;
	}

	public List<ColumnMetaData> getColumnMeta() {
		return columnMeta;
	}

	public void setColumnMeta(List<ColumnMetaData> columnMeta) {
		this.columnMeta = columnMeta;
	}
	
	
}
