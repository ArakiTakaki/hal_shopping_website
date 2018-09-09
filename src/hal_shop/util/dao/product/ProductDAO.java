package hal_shop.util.dao.product;

import java.util.List;

import hal_shop.util.DBManager;

public class ProductDAO {
	public List<ProductDTO> getall() {
		DBManager dbm = new DBManager();
		List<ProductDTO> dto = dbm.get(new ProductMapping());
		dbm.close();
		return dto;
	}
	
	public ProductDTO find(String key) {
		DBManager dbm = new DBManager();
		ProductDTO dto = dbm.find(key, new ProductMapping());
		dbm.close();
		return dto;
	}
}
