package hal_shop.util.beans.product;

import java.sql.ResultSet;
import java.sql.SQLException;

import hal_shop.util.ResultSetMapping;

public class Mapping extends ResultSetMapping<DTO> {

	protected String primaryKey = "product_no";
	
	@Override
	public DTO setMapping(ResultSet rs)throws SQLException{
		DTO pd = new DTO();
		pd.setNo(rs.getString("product_no"));
		pd.setName(rs.getString("product_name"));
		pd.setType(rs.getString("product_type"));
		pd.setId(rs.getInt("category_id"));
		pd.setPrice(rs.getInt("product_price"));
		pd.setImg(rs.getString("product_img"));
		pd.setArea(rs.getString("product_area"));
		pd.setDescription(rs.getString("product_Description"));
		return pd;
	}

}
