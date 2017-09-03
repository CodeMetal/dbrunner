package com.codemetal.dbrunner.dao;

import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.stereotype.Repository;

import com.codemetal.dbrunner.model.RowData;
import com.codemetal.dbrunner.model.ColumnMetaData;
import com.codemetal.dbrunner.model.QueryResult;

@Repository
public class SqlDAO {
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	public void upsert(String sql){
		this.jdbcTemplate.update(sql);
	}
	
	public void ddl(String sql){
		this.jdbcTemplate.execute(sql);
		
	}
	
	public QueryResult query(String sql){
		return this.jdbcTemplate.query(sql, new ResultSetExtractor<QueryResult>() {

		    @Override
		    public QueryResult extractData(ResultSet rs) throws SQLException, DataAccessException {
		    	
		    	QueryResult queryResult = new QueryResult();
		    	List<RowData> rows = new ArrayList<RowData>();
		    	List<ColumnMetaData> columnMeta = new ArrayList<ColumnMetaData>();
		    	
		        ResultSetMetaData rsmd = rs.getMetaData();	        
		        
			    int columnCount = rsmd.getColumnCount();
			    for(int i = 1 ; i <= columnCount ; i++){
			    	ColumnMetaData column = new ColumnMetaData();
				    column.setColumnName(rsmd.getColumnName(i));
				    column.setColumnTypeName(rsmd.getColumnTypeName(i));
				    columnMeta.add(column);
			    }
			    while(rs.next()){
			    	//new row
			    	RowData rowData = new RowData();
			    	for(int i = 1 ; i <= columnCount ; i++){
			    		Object obj = rs.getObject(i);
			    		if(obj != null){
			    			rowData.addColumnValue(obj);
				    	}		    		
			    	}
			    	rows.add(rowData);
			    }
			    queryResult.setColumnMeta(columnMeta);
			    queryResult.setRow(rows);

		    return queryResult;
		}
		});
	}
}
