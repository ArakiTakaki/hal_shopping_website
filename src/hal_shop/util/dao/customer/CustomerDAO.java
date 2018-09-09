package hal_shop.util.dao.customer;

import java.util.List;

import hal_shop.util.dao.DBManager;

public class CustomerDAO {
	private CustomerDAO() {}
	public static List<CustomerDTO> getall() {
		DBManager dbm = new DBManager();
		List<CustomerDTO> dto = dbm.get(new CustomerMapping());
		dbm.close();
		return dto;
	}
	
	public static CustomerDTO find(String key) {
		DBManager dbm = new DBManager();
		CustomerDTO dto = dbm.find(key, new CustomerMapping());
		dbm.close();
		return dto;
	}
	
	public static CustomerDTO Login(String id, String password) {
		DBManager dbm = new DBManager();
		CustomerDTO dto = dbm.db("customer").where("customer_id", id).where("customer_pass", password).first(new CustomerMapping());
		dbm.close();
		return dto;
	}
}
