package hal_shop.util.beans.product;

import java.sql.ResultSet;
import java.sql.SQLException;

import hal_shop.util.ResultSetMapping;

public class ProductMapping extends ResultSetMapping<ProductDTO> {

	protected String primaryKey = "product_no";
	protected String table = "customer";
	
	@Override
	public ProductDTO setMapping(ResultSet rs)throws SQLException{
		ProductDTO pd = new ProductDTO();
		pd.setNo(rs.getString("product_no"));
		pd.setName(rs.getString("product_name"));
		pd.setType(rs.getString("product_type"));
		pd.setCategoryID(rs.getInt("category_id"));
		pd.setPrice(rs.getInt("product_price"));
		pd.setImg(rs.getString("product_img"));
		pd.setArea(rs.getString("product_area"));
		pd.setDescription(rs.getString("product_Description"));
		return pd;
	}

}
