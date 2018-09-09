package hal_shop.util.dao.customer;

import java.util.List;

import hal_shop.util.dao.DBManager;

public class CustomerDAO {
	public List<CustomerDTO> getall() {
		DBManager dbm = new DBManager();
		List<CustomerDTO> dto = dbm.get(new CustomerMapping());
		dbm.close();
		return dto;
	}
	
	public CustomerDTO find(String key) {
		DBManager dbm = new DBManager();
		CustomerDTO dto = dbm.find(key, new CustomerMapping());
		dbm.close();
		return dto;
	}
}
