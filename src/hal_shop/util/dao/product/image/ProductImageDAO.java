package hal_shop.util.dao.product.image;

import java.util.List;

import hal_shop.util.dao.DBManager;

public class ProductImageDAO {
	public List<ProductImageDTO> getall() {
		DBManager dbm = new DBManager();
		List<ProductImageDTO> dto = dbm.get(new ProductImageMapping());
		dbm.close();
		return dto;
	}
	
	public ProductImageDTO find(String key) {
		DBManager dbm = new DBManager();
		ProductImageDTO dto = dbm.find(key, new ProductImageMapping());
		dbm.close();
		return dto;
	}
	
}
