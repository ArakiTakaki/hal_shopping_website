package hal_shop.util.beans.product;

import java.util.List;

import hal_shop.util.DBManager;

public class DAO {
	public List<DTO> getall() {
		DBManager dbm = new DBManager();
		List<DTO> dto = dbm.get(new Mapping());
		dbm.close();
		return dto;
	}
	
	public DTO find(String key) {
		DBManager dbm = new DBManager();
		DTO dto = dbm.find(key, new Mapping());
		dbm.close();
		return dto;
	}
}
