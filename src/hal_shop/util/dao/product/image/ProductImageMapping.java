package hal_shop.util.dao.product.image;

import java.sql.ResultSet;
import java.sql.SQLException;

import hal_shop.util.dao.ResultSetMapping;

public class ProductImageMapping extends ResultSetMapping<ProductImageDTO> {

	public ProductImageMapping() {
		this.primaryKey = "id";
		this.table = "product_img";
	}
	
	@Override
	public ProductImageDTO setMapping(ResultSet rs)throws SQLException{
		ProductImageDTO pd = new ProductImageDTO();
		pd.setId(rs.getInt("id"));
		pd.setProductNo(rs.getString("product_no"));
		pd.setImgPath(rs.getString("img_path"));
		return pd;
	}

}
