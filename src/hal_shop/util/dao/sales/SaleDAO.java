package hal_shop.util.dao.sales;

import java.util.List;

import hal_shop.util.DBManager;

public class SaleDAO {
	public List<SaleDTO> getall() {
		DBManager dbm = new DBManager();
		List<SaleDTO> dto = dbm.get(new SaleMapping());
		dbm.close();
		return dto;
	}
	
	public SaleDTO find(String key) {
		DBManager dbm = new DBManager();
		SaleDTO dto = dbm.find(key, new SaleMapping());
		dbm.close();
		return dto;
	}
}
