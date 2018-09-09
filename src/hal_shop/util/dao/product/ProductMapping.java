package hal_shop.util.dao.product;

import java.sql.ResultSet;
import java.sql.SQLException;

import hal_shop.util.dao.ResultSetMapping;
import hal_shop.util.dao.product.image.ProductImageDAO;

public class ProductMapping extends ResultSetMapping<ProductDTO> {

	protected String primaryKey = "product_no";
	protected String table = "product";
	
	@Override
	public ProductDTO setMapping(ResultSet rs)throws SQLException{
		ProductDTO pd = new ProductDTO();
		pd.setNo(rs.getString("product_no"));
		pd.setName(rs.getString("product_name"));
		pd.setType(rs.getString("product_type"));
		pd.setCategoryID(rs.getInt("category_id"));
		pd.setPrice(rs.getInt("product_price"));
		pd.setArea(rs.getString("product_area"));
		pd.setDescription(rs.getString("product_Description"));
		pd.setImages(ProductDAO.getImages(pd.getNo()));
		return pd;
	}

}
