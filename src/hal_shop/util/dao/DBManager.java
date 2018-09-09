package hal_shop.util.dao;

import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import java.sql.Connection;

/**
 * closeを行う必要のある、SQL接続クラス。
 * 
 * @author arakitakaki
 *
 */
public class DBManager {

	private String dbname = "jv_test";
	private String server = "localhost";
	private String port = "3306";
	private Connection con = null;
	private Statement st = null;
	private StringBuilder query;
	private boolean where;

	public DBManager() {
		this.connect();
	}

	public DBManager(String dbname) {
		this.dbname = dbname;
		this.connect();
	}

	public DBManager(String dbname, String server) {
		this.dbname = dbname;
		this.server = server;
		this.connect();
	}

	public DBManager(String dbname, String server, String port) {
		this.dbname = dbname;
		this.server = server;
		this.port = port;
		connect();
	}

	public void connect() {
		try {
			StringBuilder url = new StringBuilder();
			// jdbc:spssoem:mysql://<host>:<port>;DatabaseName=<database>
			Class.forName("com.mysql.jdbc.Driver");
			url.append("jdbc:mysql://");
			url.append(this.server).append(":");
			url.append(this.port).append("/");
			url.append(this.dbname);
			url.append("?useUnicode=true&characterEncoding=utf8"); // 設定
			System.out.println(url.toString());
			this.con = DriverManager.getConnection(url.toString(), "root", "");
			this.st = con.createStatement();
		} catch (ClassNotFoundException e) {
			System.out.println(e);
		} catch (SQLException e) {
			System.out.println(e);
		} finally {
		}
	}

	public DBManager db(String table) {
		this.query = new StringBuilder();
		this.query.append("SELECT * FROM ").append(table);
		this.where = false;
		return this;
	}

	public void insert(String table) {
		this.query = new StringBuilder();
		this.query.append("INSERT INTO ").append(table).append("()").append(" VALUES ");
	}

	public void update(String table) {
		this.query = new StringBuilder();
		this.query.append("UPDATE ").append(table).append(" SET ");
		this.where = false;
	}

	public void delete(String table) {
		this.query = new StringBuilder();
		this.query.append("DELETE ").append(table);
		this.where = false;
	}
	
	public int query(String query) {
		int result = -1;
		try {
			result = this.st.executeUpdate(query);
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return result;
	}

	public DBManager select(String[] attributes) {
		String result = String.join(", ", attributes);
		this.query.replace(7, 7, result);
		return this;
	}

	public DBManager where(String col, String key) {
		String opperand = this.where ? " AND " : " WHERE ";
		this.query.append(opperand).append(col).append(" = ").append(" '").append(key).append("' ");
		this.where = true;
		return this;
	}

	/**
	 * Stringの二次元配列として値を返却する。
	 * 
	 * @return table
	 */
	public ArrayList<ArrayList<String>> toArray() {
		try {
			ArrayList<ArrayList<String>> tbl = new ArrayList<ArrayList<String>>();
			ResultSet rs = this.st.executeQuery(this.query.toString());
			ResultSetMetaData rsmd = rs.getMetaData();
			while (rs.next()) {
				ArrayList<String> rec = new ArrayList<String>();
				for (int i = 1; i < rsmd.getColumnCount(); i++) {
					rec.add(rs.getString(i));
				}
				tbl.add(rec);
			}
			return tbl;
		} catch (SQLException e) {
			System.out.println(e);
		}
		return null;
	}

	/**
	 * DTOモデルの通りに値を返却する。
	 * 
	 * @param mapping
	 * @return
	 */
	public <T> List<T> get(ResultSetMapping<T> mapping) {
		this.db(mapping.getTable());
		System.out.println(mapping.getTable());
		System.out.println(mapping.getPrimaryKey());
		try {
			// (2) SQLの実行
			List<T> list = new ArrayList<T>();
			System.out.println(this.query.toString());
			ResultSet rs = this.st.executeQuery(this.query.toString());
			while (rs.next()) {
				T dto = mapping.setMapping(rs);
				list.add(dto);
			}
			st.close();
			return list;
		} catch (SQLException e) {
			System.out.println(e);
		}
		return null;
	}
	
	public boolean isExists(){
		try {
			ResultSet rs = this.st.executeQuery(this.query.toString());
			if(rs.next()) {
				return true;
			}
		} catch(SQLException e){
			System.out.println(e);
		}
		return false;
	}

	public <T> T find(String key, ResultSetMapping<T> mapping) {
		this.db(mapping.getTable());
		this.where(mapping.primaryKey, key);
		try {
			ResultSet rs = this.st.executeQuery(this.query.toString());
			if (!rs.next())
				return null;
			T dto = mapping.setMapping(rs);
			st.close();
			return dto;
		} catch (SQLException e) {
			System.out.println(e);
		}
		return null;
	}

	public <T> T mltipleFind(String[] keys, ResultSetMapping<T> mapping) {
		this.db(mapping.getTable());
		for (int i = 0; i < keys.length; i++) {
			this.where(mapping.getMultipleKey()[i], keys[i]);
		}
		try {
			ResultSet rs = this.st.executeQuery(this.query.toString());
			T dto = mapping.setMapping(rs);
			st.close();
			return dto;
		} catch (SQLException e) {
			System.out.println(e);
		}
		return null;
	}

	public <ONE, MANY> List<MANY> hasMany(String key, ResultSetMapping<ONE> one, ResultSetMapping<MANY> many,
			String tableKey) {
		this.db(many.getTable());
		if (tableKey != null) {
			this.where(tableKey, key);
		} else {
			this.where(one.primaryKey, key);
		}
		try {
			List<MANY> table = new ArrayList<MANY>();
			System.out.println(this.query.toString());
			ResultSet rs = this.st.executeQuery(this.query.toString());
			while (rs.next()) {
				MANY dto = many.setMapping(rs);
				table.add(dto);
			}
			st.close();
			return table;
		} catch (SQLException e) {
			System.out.println(e);
		}
		return null;
	}

	public void close() {
		try {
			this.con.close();
		} catch (SQLException e) {
		}
		try {
			this.st.close();
		} catch (SQLException e) {
		}
	}
}
