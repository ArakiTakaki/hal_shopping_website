package hal_shop.util.dao.category;

import java.sql.ResultSet;
import java.sql.SQLException;

import hal_shop.util.dao.ResultSetMapping;

public class CategoryMapping extends ResultSetMapping<CategoryDTO> {
	
	public CategoryMapping() {
		this.primaryKey = "id";
		this.table = "categories";
	}
	
	@Override
	public CategoryDTO setMapping(ResultSet rs)throws SQLException{
		CategoryDTO pd = new CategoryDTO();
		pd.setId(rs.getInt("id"));
		pd.setName(rs.getString("name"));
		return pd;
	}

}
