package hal_shop.util.dao.sale.detail;

import java.util.List;

import hal_shop.util.dao.DBManager;

public class SDetailDAO {
	public List<SDetailDTO> getall() {
		DBManager dbm = new DBManager();
		List<SDetailDTO> dto = dbm.get(new SDetailMapping());
		dbm.close();
		return dto;
	}
	
	public SDetailDTO find(String saleNo, String productNo) {
		DBManager dbm = new DBManager();
		String[] keys = {saleNo,productNo};
		SDetailDTO dto = dbm.mltipleFind(keys, new SDetailMapping());
		dbm.close();
		return dto;
	}
}
