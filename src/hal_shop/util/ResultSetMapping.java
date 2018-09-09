package hal_shop.util;

import java.sql.ResultSet;
import java.sql.SQLException;

public abstract class ResultSetMapping<T>{
	protected String primaryKey = "id";
	protected String table = "";
	public abstract T setMapping(ResultSet rs)throws SQLException;
	public String getPrimaryKey() {
		return this.primaryKey;
	}
	public String getTable() {
		return this.table;
	}

}