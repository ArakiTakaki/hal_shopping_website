package hal_shop.util.dao.product;

import java.util.List;

import hal_shop.util.dao.DBManager;
import hal_shop.util.dao.product.image.ProductImageDTO;
import hal_shop.util.dao.product.image.ProductImageMapping;

public class ProductDAO {
	private ProductDAO() {}
	public static List<ProductDTO> getall() {
		DBManager dbm = new DBManager();
		List<ProductDTO> dto = dbm.get(new ProductMapping());
		dbm.close();
		return dto;
	}
	
	public static ProductDTO find(String key) {
		DBManager dbm = new DBManager();
		ProductDTO dto = dbm.find(key, new ProductMapping());
		dbm.close();
		return dto;
	}
	
	public static List<ProductImageDTO> getImages(String productID) {
		DBManager dbm = new DBManager();
		List<ProductImageDTO> dto = dbm.hasMany(productID, new ProductMapping(), new ProductImageMapping(),null );
		dbm.close();
		return dto;
	}

}
