package hal_shop.util.dao;

import java.sql.ResultSet;
import java.sql.SQLException;

public abstract class ResultSetMapping<T>{
	protected String primaryKey = "id";
	protected String table = "";
	protected String[] maltipleKey = null;

	public abstract T setMapping(ResultSet rs)throws SQLException;
	public String getPrimaryKey() {
		return primaryKey;
	}
	
	public String getTable() {
		return table;
	}
	
	public String[] getMultipleKey() {
		return maltipleKey;
	}

}