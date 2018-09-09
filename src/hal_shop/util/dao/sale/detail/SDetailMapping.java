package hal_shop.util.dao.sale.detail;

import java.sql.ResultSet;
import java.sql.SQLException;

import hal_shop.util.dao.ResultSetMapping;

public class SDetailMapping extends ResultSetMapping<SDetailDTO> {

	protected String table = "sales_details";
	protected String[] maltipleKey = {"sales_no","product_no"};
	
	@Override
	public SDetailDTO setMapping(ResultSet rs)throws SQLException{
		SDetailDTO sd = new SDetailDTO();
		sd.setNo(rs.getInt("sales_no"));
		sd.setCustomerNo(rs.getInt("customer_no"));
		sd.setDate(rs.getString("sales_date"));
		return sd;
	}

}
